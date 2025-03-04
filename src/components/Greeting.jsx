import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! 欢迎你来到我的网站</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        没有气势！重新来！
      </button>
    </div>
  );
}