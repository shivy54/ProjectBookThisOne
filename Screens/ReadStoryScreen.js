import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import db from "../config";
import ReadStoryScreen from "./WriteStoryScreen";

export default class ReadStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllBooks: [],
    };
  }
  componentDidMount = async () => {
    const query = await db.collection("Story");
    query.docs.map((doc) => {
      this.setState({
        AllBooks: [...this.state.AllBooks, doc.data()],
      });
    });
  };

  searchBooks = async(text) =>{
      var text = text.toUpperCase()
      const search = await db.collection("Story").where("Title","==",text).get()
      Story.docs.map((doc)=>{
        this.setState({
          AllBooks:[...this.state.AllBooks,doc.data()]
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.bar}
            placeholder="Enter Book Name"
            onChangeText={(text) => {
              this.setState({ search: text });
            }}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.searchBooks(this.state.search);
            }}
          >
            <Text>Search</Text>
          </TouchableOpacity>

        </View>
        <ScrollView>
          {this.state.AllBooks.map((Books, index) => {
            return (
              <View key={index} style={{ borderBottomWidth: 2 }}>
                <Text>{"Book Title:" + Books.Title}</Text>
                <Text>{"Book Author:" + Books.Author}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })