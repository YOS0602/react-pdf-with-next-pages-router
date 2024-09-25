import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "HackGen35",
  fonts: [
    {
      src: "/HackGen35-Regular.ttf",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: "/HackGen35-Bold.ttf",
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "HackGen35",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  boldText: {
    fontWeight: "bold",
  },
});

/**
 * Create Document Component
 */
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>こんにちは</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text style={styles.boldText}>太字です</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
