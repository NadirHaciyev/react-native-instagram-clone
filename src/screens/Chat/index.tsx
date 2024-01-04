import ChatItem from '@/components/chat/ChatItem';
import ChatNavigationBar from '@/components/chat/ChatNavigationBar';
import Container from '@/components/common/Container';
import Search from '@/components/core/Search';
import {colors} from '@/constants';
import {Text, View, StyleSheet} from 'react-native';

function ChatScreen() {
  return (
    <View style={styles.main}>
      <Container extraStyles={{gap: 10}}>
        <ChatNavigationBar />
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default ChatScreen;
