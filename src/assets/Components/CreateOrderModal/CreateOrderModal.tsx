import React from 'react';
import { Modal, Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

interface CreateOrderModalProps {
  opened: boolean;
  onClose: () => void;
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({ opened, onClose }) => {
  const form = useForm({
    initialValues: {
      orderName: '',
      orderDescription: '',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Create Order">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Order Name"
          placeholder="Enter order name"
          {...form.getInputProps('orderName')}
        />
        <TextInput
          label="Order Description"
          placeholder="Enter order description"
          {...form.getInputProps('orderDescription')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default CreateOrderModal;
