import { styles } from "@/styles/pdf";
import { Document, Page, Text, View } from "@react-pdf/renderer";

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
