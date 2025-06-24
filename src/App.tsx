import Layout from './components/Layout';

export const App = () => {
  console.log('Test');
  return (
    <Layout>
      <h2>Основное содержимое</h2>
      <p>Этот блок занимает всю доступную высоту между header и footer.</p>
      <p>Контент будет прокручиваться под прилипшими элементами.</p>
      <div style={{ height: '2000px' }}></div>
    </Layout>
  );
};
