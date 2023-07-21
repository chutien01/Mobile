import React, { useState,useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SavedScreen = () => {
  const [newsData, setNewsData] = useState([
    { 
      id: 1, 
      title: "Cầu cần thơ, TP.HCM", 
      content: "Dự án xây dựng cầu Cần Giờ dự kiến sẽ khởi công vào năm 2025, tăng cường kết nối huyện Cần Giờ với trung tâm TP.HCM.Thông tin chuẩn bị đầu tư cho dự án cầu Cần Giờ (nối Cần Giờ với huyện Nhà Bè) đã nhận được sự quan tâm của người dân. Dự án cầu Cần Giờ sau khi hoàn thành sẽ phá vỡ thế độc đạo kết nối với huyện Cần Giờ.Lần đầu tiên, những hình ảnh về cầu Cần Giờ đã được lộ diện.",
      image: require("../assets/news1.jpg") 
    },
    { 
      id: 2, 
      title: "Khởi công đường 3.200 tỉ đồng 'giải cứu' nút giao cao tốc Pháp Vân-Cầu Giẽ", 
      content: "Tuyến đường nối cao tốc Pháp Vân-Cầu Giẽ với Vành đai 3 tổng mức đầu tư hơn 3.200 tỉ đồng được kỳ vọng giải quyết tình trạng ùn tắc khu vực cửa ngõ phía Nam của Thủ đô.\nSáng 19-7, TP Hà Nội khởi công dự án đầu tư xây dựng tuyến đường nối cao tốc Pháp Vân-Cầu Giẽ với Vành đai 3. Thời gian dự kiến thực hiện dự án từ nay đến năm 2025.",
      image: require("../assets/news2.jpg") 
    },
    { 
      id: 3, 
      title: "Sân bay Nội Bài 'cửa đóng, then cài' tránh bão số 1 đổ bộ", 
      content: "Sân bay quốc tế Nội Bài - Hà Nội vắng tanh sau lệnh đóng cửa để phòng chống cơn bão số 1 đang đổ bộ vào miền Bắc nước ta. Tất cả các chuyến bay đến và đi bắt buộc phải tạm dừng từ 11h - 20h ngày hôm nay (18/7) để phòng chống bão.",
      image: require("../assets/news3.jpg") 
    },
    { 
      id: 4, 
      title: "Miền Bắc còn mưa dông mát mẻ đến bao giờ?", 
      content: "Từ ngày 19 đến hôm nay (20/7), ở Bắc Bộ và Bắc Trung Bộ tiếp tục có mưa rào và dông, cục bộ có mưa to đến rất to.\nLượng mưa tính từ 19h ngày 19/7 đến 8h ngày 20/7 có nơi trên 90mm như: Mường Luân (Điện Biên) 81mm, Mông Hóa (Hòa Bình) 121.6mm, Y Can (Yên Bái) 112.8mm, Thành phố Cẩm Phả (Quảng Ninh) 116.3mm, Cát Hải (Hải Phòng) 120.2mm, Vĩnh Thịnh (Thanh Hóa) 112.4mm…\nDự báo, trong ngày hôm nay (20/7), ở khu vực Bắc Bộ và Bắc Trung Bộ vẫn có mưa, mưa vừa, có nơi mưa to và dông, tuy nhiên lượng mưa giảm dần, khoảng 10-30mm, có nơi trên 70mm.",
      image: require("../assets/news4.jpg") 
    },
    // Add more news data...
  ]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Tin tức",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const navigation = useNavigation();

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate('InfoSaved', { news: item })}
    >
      <View style={styles.newsContent}>
      <Image source={item.image} style={styles.newsImage} />
      <View style={styles.newsText}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text>{item.content.substring(0, 50)}...</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  newsItem: {
    marginTop:10,
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
  },
  newsContent: {
    flexDirection: 'row',
  },
  newsImage: {
    width: 120,
    height: 200,
    marginRight: 16,
    borderRadius: 4,
  },
  newsText: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default SavedScreen;