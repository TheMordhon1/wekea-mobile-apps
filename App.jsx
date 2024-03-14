import SafeAreaComp from './src/components/SafeAreaComp';
import Routes from './src/routes';

export default function App() {
  // console.log('SDS', JSON.stringify(Platform, null, 1));
  return (
    <SafeAreaComp>
      <Routes />
    </SafeAreaComp>
  );
}
