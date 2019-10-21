import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text>{this.props.name}!</Text>
      </View>
    )
  }
}

export default class LostsOfGreetings extends Component {
  render() {
    return (
      // <View style={{alignItems:"center"}}>
      //     <Greeting name='Robbin' />
      //     <Greeting name='Jarred' />
      //     <Greeting name='Tom' />
      // </View>
      //   <View style={{ flex: 1 }}>
      //     <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      //     <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      //     <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      //   </View>
      // 尝试把`flexDirection`改为`column`看看
      //   <View style={{ flex: 1 }}>
      //     <View
      //       style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
      //     />
      //     <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
      //     <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      //   </View>
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: 'row',
      //       justifyContent: 'center'
      //     }}
      //   >
      //     <View
      //       style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
      //     />
      //     <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
      //     <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      //   </View>
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      >
        <View
          style={{height: 50, backgroundColor: 'powderblue'}}
        />
        <View style={{height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ height: 100, backgroundColor: 'steelblue' }} />
      </View>
    )
  }
}
