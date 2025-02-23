import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, ListItem, Divider, Button} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Profil(props) {

  const [isLogged, setIsLogged] = useState(true);

  let categories = [
    {
      icon : <Entypo name="home" size={30} color="black" />,
      name : 'Mes adresses',
    },
    {
     icon : <FontAwesome name="calendar-check-o" size={30} color="black" />,
     name : 'Mes réservations',
    },
    {
      icon : <FontAwesome name="credit-card" size={30} color="black" />,
      name : 'Mes cartes',
    },
    {
      icon : <Entypo name="mail" size={30} color="black" />,
      name : 'Mes messages',
    },
    {
      icon : <FontAwesome name="star" size={30} color="black" />,
      name : 'Mes favoris',
    },
    {
      icon : <Entypo name="help" size={30} color="black" />,
      name : 'Aide',
    }
  ];

  if (isLogged === true) {
    return (
        <View style={{paddingTop:40, flex:1, backgroundColor:'#fff', display:'flex', flexDirection:'column', justifyContent:'space-between', paddingHorizontal:10}}>
          <ListItem>
            <Avatar
              rounded
              size={70}
              title="PN"
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
            />
            <ListItem.Content>
              <ListItem.Title style={{marginVertical:2, fontSize:20}}>Prénom Nom</ListItem.Title>
              <ListItem.Subtitle onPress={() => {props.navigation.navigate('EditProfil')}} style={{marginVertical:2, color:'grey'}} >Éditer mon profil</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <Divider style={{height:2}}/>
  
          {categories.map((item, i) => (
          <ListItem key={i} style={{height:90, display:'flex', justifyContent:'center'}}>
            {item.icon}
            <ListItem.Content>
              <ListItem.Title style={{marginVertical:2, fontSize:20}}>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          ))}

          <ListItem>
            <ListItem.Content style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <ListItem.Title style={{marginVertical:2,fontSize:15 }}>Mentions Légales</ListItem.Title>
              <ListItem.Title style={{marginVertical:2, fontSize:15, color:'red'}}>Déconnexion</ListItem.Title>
            </ListItem.Content>
          </ListItem>
     </View>
    );
  } else {
    return (
      <View style={{paddingTop:40, flex:1, backgroundColor:'#fff', paddingHorizontal:20, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <View>
            <View style={{marginVertical:100}}>
              <Text style={{fontSize:35}}>Bienvenue !</Text>
            </View>
            <View>
              <Text style={{fontSize:16}}>Connectez-vous pour réserver votre prochaine prestation.</Text>
              <Button title="S'identifier" style={{marginVertical:30}}></Button>
              <Text>Pas encore membre ? S'inscrire</Text>
            </View>
        </View>
        <View>
          <Text style={{marginBottom:20}}>Mention Légales</Text>
        </View>
      </View>
    );
  
  }
}


   
  const styles = StyleSheet.create({
    avatar_container:{
      display:'flex',
      flexDirection:'row',
    }

  });
  