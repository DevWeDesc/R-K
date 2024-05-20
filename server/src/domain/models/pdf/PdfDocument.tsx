import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { SolicitationModel } from "../Solicitation";
import path from "path";

interface PDFProps {
  data: SolicitationModel;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
    color: "#131925",
    marginBottom: 8,
  },
  statement: {
    fontSize: 20,
    color: "#131925",
    lineHeight: 1.4,
    marginBottom: 4,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#999999",
    margin: "24px 0 24px 0",
  },
  paragraph: {
    fontSize: 12,
    color: "#212935",
    lineHeight: 1.67,
  },
  columnParent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnStart: {
    flex: 1,
  },
  columnEnd: {
    flex: 1,
    alignItems: "flex-end",
  },
});

const PDF = ({ data }: PDFProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{data.pet.customer.name}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default async (data: SolicitationModel) => {
  const pathRelative = path.join(
    __dirname,
    "../../../",
    `infra/PDFs/${data.slug}.pdf`
  );
  return await ReactPDF.renderToFile(<PDF {...{ data }} />, pathRelative);
};
