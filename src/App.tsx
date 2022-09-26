import Button from '@/components/Button'

export default function App() {
    return (
        <main className='semi-always-light'>
            <Button onClick={() => console.log('test default button')}>默认 Button</Button>
            <Button target='_blank' type={'link'} href={'https://www.baidu.com'} onClick={() => console.log('test anchor button')}>
                A 链接 Button
            </Button>
        </main>
    )
}
