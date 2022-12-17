import { FaAppStoreIos } from 'react-icons/fa';

import Button from '@/components/Button';

export default function App() {
  return (
    <main className="semi-always-light">
      <h3>Icons</h3>
      <div>
        <FaAppStoreIos size={'22px'} color="var(--color-success)"></FaAppStoreIos>
      </div>
      <h3>Button组件</h3>
      <div>
        <Button disabled onClick={() => console.log('test default button')}>
          Default Button
        </Button>
        <Button loading size="large">
          Large Button
        </Button>
        <Button size="default">Default Button</Button>
        <Button size="small">Small Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="default">Default Button</Button>
        <Button type="danger">Danger Button</Button>
      </div>
      <div>
        <Button disabled type="link" href={'https://www.baidu.com'} target="_blank">
          A 链接 Button
        </Button>
        <Button size="large" type="link" href={'https://www.baidu.com'} target="_blank">
          A 链接 Button
        </Button>
        <Button type="link" href={'https://www.baidu.com'} target="_blank">
          A 链接 Button
        </Button>
        <Button size="small" type="link" href={'https://www.baidu.com'} target="_blank">
          A 链接 Button
        </Button>
      </div>
    </main>
  );
}
