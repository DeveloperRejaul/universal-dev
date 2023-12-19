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

const showToast = ()=>{}
return {showToast}
}
