
import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class TextInputs extends Component {

  state = {
      text: ''
  }

  render() {
    return (
      <View style={{padding: 10}}>
          <TextInput 
            style={{height: 40}}
            placeholder='翻译'
            onChangeText={(text)=>{this.setState({text})}}
            onSubmitEditing={()=>{this.setState({text: '最终提交了'})}}
            value={this.state.text}
          />
          <Text style={{padding:10, fontSize:42}}>
              {this.state.text.split(' ').map((word) => word && '*')}
          </Text>
      </View>
    )
  }
}
