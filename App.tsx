import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <AvatarSection />
        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam eaque earum id placeat reprehenderit a.
        </Text>
        <StatisticsSection></StatisticsSection>
        <AddressSection />
      </View>
    </View>
  );
}

function AvatarSection() {
  return (<View style={styles.avatarSection}>
    <Image source={require("./assets/Site/Oval.png")} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={{ fontWeight: "bold", fontSize: 20, fontFamily: "serif" }}>The Octocat</Text>
      <Text style={{ color: "#32a89d" }}>@octocat</Text>
      <Text style={styles.text}>Joined 25 Jan 2011</Text>
    </View>
  </View>)
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

  return <View>
    {/* location */}
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 5 }}>
      <Image source={require("./assets/Site/003-pin.png")} style={styles.icon} />
      <Text style={styles.text}>
        San Francisco
      </Text>
    </View>
    {/* url */}
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 5 }}>
      <Image source={require("./assets/Site/002-url.png")} style={styles.icon} />
      <Text style={styles.text}>
        https://github.com/sarwar-asik
      </Text>
    </View>
    {/* Twitter */}
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 5 }}>
      <Image source={require("./assets/Site/004-twitter.png")} style={[styles.icon, { tintColor: "#B6BBC4" }]} />
      <Text style={[styles.text, { color: "#B6BBC4" }]}>
        sarwar_asik
      </Text>
    </View>
    {/* gihub */}
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginVertical: 5 }}>
      <Image source={require("./assets/Site/001-office-building.png")} style={styles.icon} />
      <Text style={styles.text}>
        sarwar-asik
      </Text>
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9BFC7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  subContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    flexDirection: "column",
    gap: 18,
  },
  avatarSection: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    gap: 5,
    width: "100%"
  },
  avatar: {
    width: 80,
    height: 80,

  },
  textContainer: {
    alignItems: 'flex-start',
    flexDirection: "column",
    gap: 2,

  },
  text: {
    color: '#9CAFAA',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  // address section
  icon: {
    width: 20,
    height: 20,

  }

});
