import React, { Component } from "react";
import { TopToast } from "../position/TopToast";
import CenterToast from "../position/CenterToast";
import BottomToast from "../position/BottomToast";
import { Props, State, ToastOptions } from "./types";
import { TopRight } from "../position/TopRigth";


// container components
export default class ToastContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  static defaultProps: Props = {
    placement: "bottom",
    offset: 10,
    swipeEnabled: true,
  };

  show = (message: string | JSX.Element, toastOptions?: ToastOptions) => {
    let id = toastOptions?.id || Math.random().toString();
    const onDestroy = () => {
      toastOptions?.onClose && toastOptions?.onClose();
      this.setState({ toasts: this.state.toasts.filter((t) => t.id !== id) });
    };

    requestAnimationFrame(() => {
      this.setState({
        toasts: [
          {
            id,
            onDestroy,
            message,
            open: true,
            onHide: () => this.hide(id),
            ...this.props,
            ...toastOptions,
          },
          ...this.state.toasts.filter((t) => t.open),
        ],
      });
    });

    return id;
  };

  update = (
    id: string,
    message: string | JSX.Element,
    toastOptions?: ToastOptions
  ) => {
    this.setState({
      toasts: this.state.toasts.map((toast) =>
        toast.id === id ? { ...toast, message, ...toastOptions } : toast
      ),
    });
  };

  hide = (id: string) => {this.setState({toasts: this.state.toasts.map((t) =>t.id === id ? { ...t, open: false } : t)})};
  hideAll = () => {this.setState({toasts: this.state.toasts.map((t) => ({ ...t, open: false }))})};
  isOpen = (id: string) => this.state.toasts.some((t) => t.id === id && t.open);
 


  render() {
    return (
      <>
        <TopToast {...{props:this.props, state:this.state}}/>
        <BottomToast {...{props:this.props, state:this.state}}/>
        <CenterToast {...{props:this.props, state:this.state}}/>
        <TopRight {...{props:this.props, state:this.state}}/>
      </>
    );
  }
}