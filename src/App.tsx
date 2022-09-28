import Button from '@/components/Button'

export default function App() {
  return (
    <main className='semi-always-light'>
      <Button disabled size='default' onClick={() => console.log('test default button')}>
        Default Button
      </Button>
      <Button size='small'>Small Button</Button>
      <Button size='large'>Large Button</Button>
      <Button type='primary'>Primary Button</Button>
      <Button type='default'>Default Button</Button>
      <Button type='danger'>Danger Button</Button>
      <Button target='_blank' type='link' href={'https://www.baidu.com'}>
        A 链接 Button
      </Button>
      <Button disabled target='_blank' type='link' href={'https://www.baidu.com'}>
        A 链接 Button
      </Button>
    </main>
  )
}
