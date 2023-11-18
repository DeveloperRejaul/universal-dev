import { ToastDescription, VStack } from '@gluestack-ui/themed';
import { ToastTitle } from '@gluestack-ui/themed';
import { Toast, useToast } from '@gluestack-ui/themed';

type params = {
  position?:
    | 'top'
    | 'bottom'
    | 'bottom left'
    | 'bottom right'
    | 'top left'
    | 'top right';
  title?: string;
  message?: string;
  action?: 'attention' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'solid' | 'outline' | 'accent';
};

export default function () {
  const toast = useToast();

  const showToast = ({ position, title, message, action, variant }: params) => {
    toast.show({
      placement: position || 'top',
      render: ({ id }) => {
        return (
          <Toast
            nativeID={'toast-' + id}
            action={action}
            variant={variant}
            top={'$7'}>
            <VStack space='xs'>
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>{message}</ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return { showToast };
}
