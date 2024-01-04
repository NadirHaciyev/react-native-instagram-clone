import ChatItem from '@/components/chat/ChatItem';
import MessagesNavigationBar from '@/components/chat/MessagesNavigationBar';
import Container from '@/components/common/Container';
import Search from '@/components/core/Search';
import {colors} from '@/constants';
import {Text, View, StyleSheet} from 'react-native';

function MessagesScreen() {
  return (
    <View style={styles.main}>
      <Container extraStyles={{gap: 10}}>
        <MessagesNavigationBar />
        <Search />
        <View style={styles.chatTitleContainer}>
          <Text style={styles.chatTitle}>Messages</Text>
          <Text style={styles.chatRequests}>Requests</Text>
        </View>
        <View>
          <ChatItem />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
  chatTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  chatTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatRequests: {
    color: colors.grey_400,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MessagesScreen;
