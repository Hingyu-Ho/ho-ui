// PureComponent -> 没有 shouldComponentUpdate
// FunctionComponent -> hooks
// 推荐使用 Typescript React code snippets[tsrpfc、tsrsfc、tsdrpfc]

// import * as React from 'react'

export type ButtonSize = 'large' | 'default' | 'small'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface IButtonProps {
    className?: string
    disabled?: boolean
    loading?: boolean
    size?: ButtonSize
    type?: ButtonType
    href?: string
    children: React.ReactNode
}

// 从 React 中获取 button、a 标签原生元素属性
// Omit 排除原生 type 属性
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'> & IButtonProps
type AnchorButtonProps = Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'> & IButtonProps

// Partial 相当于 ，代表所有的类型都是一个可选的类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const App: React.FunctionComponent<ButtonProps> = (props) => {
    const { className, disabled, loading, size, type, href, children, ...rest } = props
    console.log(href, 'href')

    if (type === 'link' && href) {
        return (
            <a href={href} {...rest}>
                {children}
            </a>
        )
    } else {
        return (
            <button disabled={disabled} {...rest}>
                {children}
            </button>
        )
    }
}

export default App
