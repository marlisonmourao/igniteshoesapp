import OneSignal from "react-native-onesignal"

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Marlison',
    'user_email': 'marlison@gmail.com'
  })
}