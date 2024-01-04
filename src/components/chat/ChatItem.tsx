import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import useAppSelector from '@/hooks/useAppSelector';
import Avatar from '../common/Avatar/Avatar';
import {colors} from '@/constants';
import {useNavigation} from '@react-navigation/native';

function ChatItem() {
  const user = useAppSelector(state => state.user.user);
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Chat')}>
      <Avatar
        size={66}
        image={
          'http://192.168.1.67:4000/uploads/users/64c024dede532bed06779a5e.jpg'
        }
        hasSharing={false}
      />
      <View style={{flex: 1}}>
        <Text style={styles.name}>ChatItem</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          Hello I am Nadir
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  name: {
    color: colors.white,
    fontSize: 22,
  },
  lastMessage: {
    color: colors.grey_400,
    fontSize: 20,
  },
});

export default ChatItem;
