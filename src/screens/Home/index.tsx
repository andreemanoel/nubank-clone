import React, {useEffect} from 'react';
import OneSignal, {OpenedEvent} from 'react-native-onesignal';
import Content from '../../components/molecules/Content';
import Header from '../../components/molecules/Header';
import Tabs from '../../components/molecules/Tabs';
import Container from '../../components/organisms/Container';
//f38895e3-1238-4b87-a00d-a0e35782135c

const Home: React.FC = () => {
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('f38895e3-1238-4b87-a00d-a0e35782135c');
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );
    OneSignal.setNotificationOpenedHandler(onOpened);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOpened = (result: OpenedEvent) => {
    console.log(result.notification.body);
  };

  return (
    <Container>
      <Header />
      <Content />
      <Tabs />
    </Container>
  );
};

export default Home;
