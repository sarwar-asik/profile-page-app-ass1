import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <AvatarSection />
        <Text style={styles.text}>
          Full Stack Web Developer sit amet consectetur adipisicing elit. Modi ut perferendis eveniet blanditiis fugit, aspernatur enim beatae illo animi pariatur.
        </Text>
        <StatisticsSection></StatisticsSection>
        <AddressSection />
      </View>
    </SafeAreaView>
  );
}

function AvatarSection() {
  return (<SafeAreaView style={styles.avatarSection}>
    <Image source={require("./assets/Site/Oval.png")} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 20, fontFamily: "serif" }}>The Octocat</Text>
      <Text style={{ color: "#32a89d" }}>@octocat</Text>
      <Text style={styles.text}>Joined 25 Jan 2011</Text>
    </View>
  </SafeAreaView>)
}

function StatisticsSection() {
  type ItemType = {
    typeName: string,
    value: number
  }
  const data: ItemType[] = [
    { typeName: "Repos", value: 8 },
    { typeName: "Followers", value: 3939 },
    { typeName: "Following", value: 9 },
  ]
  return (
    <View style={{ backgroundColor: "#ebf0ef", paddingHorizontal: 24, paddingVertical: 15, borderRadius: 10, marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>

      {
        data?.map((item: ItemType, index: number) => {
          return <View key={index + 1} style={{
            alignItems: "center",
            flexDirection: "column"
          }}>
            <Text style={[styles.text, { fontSize: 14 }]}>{item?.typeName}</Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>{item?.value}</Text>
          </View>
        })
      }
    </View>
  )
}

function AddressSection() {

  type AddressItem = { src: string, typeName: string, color?: string }
  const addressData: AddressItem[] = [
    { src: require("./assets/Site/003-pin.png"), typeName: "San Francisco" },
    { src: require("./assets/Site/002-url.png"), typeName: "github.com/sarwar-asik" },
    { src: require("./assets/Site/004-twitter.png"), typeName: "/sarwar_asik", color: "#B6BBC4" },
    { src: require("./assets/Site/001-office-building.png"), typeName: "sarwar-asik" },
  ]

  return <View>
    {
      addressData?.map((item: AddressItem, index: number) => (
        <View>
          <StatisticsReusableItem key={index + 1} src={item.src} typeName={item.typeName} color={item.color} />
        </View>
      ))
    }

  </View>
}
function StatisticsReusableItem(props: { src: any, typeName: string, color?: string }) {
  const { src, typeName, color } = props;
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 5 }}>
      <Image source={src} style={[styles.icon, { tintColor: color }]} />
      <Text style={[styles.text, { color }]}>
        {typeName}
      </Text>
    </View>
  );
}

// ! style section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6DAC8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 36,
    paddingTop: 36
  },
  subContainer: {
    paddingHorizontal: 18,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    width: "100%",
    paddingVertical: 48,
    flexDirection: "column",
    gap: 18,
    justifyContent: "space-between"
  },
  avatarSection: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    gap: 20,
    width: "100%",
  },
  avatar: {
    width: 80,
    height: 80,

  },
  textContainer: {
    alignItems: 'flex-start',
    flexDirection: "column",
    gap: 2,
    flex: 1

  },
  text: {
    color: '#9CAFAA',
    fontSize: 16,
    fontWeight: '600',
    // marginVertical: 2,
    // fontFamily: "serif",
    // letterSpacing:1,
    lineHeight: 22

  },
  // address section
  icon: {
    width: 24,
    height: 24,
    padding: 2

  }

});
