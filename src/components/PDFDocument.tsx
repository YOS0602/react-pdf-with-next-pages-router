import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
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
        <Text>こんにちは</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;

/**
 * PDFViewer は web specific API を含むため Client Side 向け
 */
export const MyPDFViewer = () => {
  return (
    <PDFViewer className="mx-auto" width={1200} height={1000}>
      <PDFDocument />
    </PDFViewer>
  );
};
