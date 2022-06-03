import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import UserProfileCompletion from './components/UserProfile/UserProfileCompletion'
import store from './redux/store'

const App = () => (
    <Provider store={store}>
        <View style={{ flex: 1 }}>
            <UserProfileCompletion />
        </View>
    </Provider>
)

export default App
