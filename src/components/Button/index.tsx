// PureComponent -> 没有 shouldComponentUpdate
// FunctionComponent -> hooks
// 推荐使用 Typescript React code snippets[tsrpfc、tsrsfc、tsdrpfc]

import './style.scss';

// import * as React from 'react'
import classnames from 'classnames';

export type ButtonSize = 'large' | 'default' | 'small';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface IButtonProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

// 从 React 中获取 button、a 标签原生元素属性
// Omit 排除原生 type 属性
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'> & IButtonProps;
type AnchorButtonProps = Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'> & IButtonProps;

// Partial 相当于 ，代表所有的类型都是一个可选的类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const App: React.FunctionComponent<ButtonProps> = (props) => {
  const { className, disabled, loading, size, type, href, children, ...rest } = props;

  if (type === 'link' && href) {
    const classes = classnames('btn', className, {
      [`btn-size-${size}`]: size,
      [`btn-type-${type}`]: type,
      disabled
    });
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  } else {
    const classes = classnames('btn', className, {
      [`btn-size-${size}`]: size,
      [`btn-type-${type ? type : 'default'}`]: !disabled,
      loading
    });
    return (
      <button disabled={disabled} className={classes} {...rest}>
        {loading && (
          <span className="pr-1">
            <i className="fas fa-spinner pin"></i>
          </span>
        )}
        {children}
      </button>
    );
  }
};

export default App;
