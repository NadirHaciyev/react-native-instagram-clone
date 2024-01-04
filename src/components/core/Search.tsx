import {Text, View} from 'react-native';
import Input from '../common/Input';
import Icon from 'react-native-vector-icons/Ionicons';

function Search() {
  return (
    <Input
      leftIcon={<Icon name="search-outline" size={22} color="white" />}
      placeholder="Search..."
    />
  );
}

export default Search;
