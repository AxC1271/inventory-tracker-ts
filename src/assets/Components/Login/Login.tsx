import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../../firebase/firebase";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton } from "./GoogleButton";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./Login.module.css";

export function Login(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (values: typeof form.values) => {
    setSuccess(null);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Email address has not been verified.");
        form.setFieldValue("name", "");
        form.setFieldValue("email", "");
        form.setFieldValue("password", "");
        return;
      }
      setError(null);
      navigate("/dashboard");
    } catch (err) {
      setError("Firebase error / Invalid Login Credentials.");
    }
  };

  const createUser = async (values: typeof form.values) => {
    setSuccess(null);
    setError(null);
    if (!values.email.endsWith("@case.edu")) {
      setError("Email address must end with @case.edu for authorized users.");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await sendEmailVerification(newUser.user);
      form.setFieldValue("name", "");
      form.setFieldValue("email", "");
      form.setFieldValue("password", "");
      setSuccess("Please check your email for a confirmation link.");
    } catch (err) {
      setError("User already exists.");
    }
  };

  const handleSubmit = (
    values: typeof form.values,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    if (event) {
      event.preventDefault();
    }
    if (type === "register") {
      createUser(values);
    } else {
      handleLogin(values);
    }
  };

  useEffect(() => {
    setSuccess(null);
    setError(null);
    form.setFieldValue("name", "");
    form.setFieldValue("email", "");
    form.setFieldValue("password", "");
  }, [type]);

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Trackr, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton 
        radius="xl"
        onClick={() => {signInWithGoogle}}
        >
          Google
        </GoogleButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      {error && <h3 className={styles.error}>{error}</h3>}
      {success && <h3 className={styles.success}>{success}</h3>}

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@case.edu"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login!"
              : "Don't have an account? Register!"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
        <Anchor
        c="dimmed"
        size="xs"
        onClick={() => navigate("/forgot-password")}
        >
          Forgot your password?
          </Anchor>
      </form>
    </Paper>
  );
}
