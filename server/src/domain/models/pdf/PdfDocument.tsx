import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { SolicitationModel } from "../Solicitation";
import path from "path";
import { FormatedDate } from "../../../utils/FormatedDate";

interface PDFProps {
  data: SolicitationModel;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#999999",
    margin: "24px 0 24px 0",
  },
  paragraph: {
    fontSize: 12,
    color: "#2e2e2e",
    lineHeight: 1.67,
  },
  paragraphBold: {
    fontWeight: 700,
    fontSize: 12,
    color: "#000",
    lineHeight: 1.67,
  },
  paragraphSM: {
    fontSize: 8,
    color: "#000",
    lineHeight: 1.2,
  },
  containerFather: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerChild: {
    flexDirection: "row",
  },
});

const PDF = ({ data }: PDFProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image
            style={{ objectFit: "cover", width: "25%", margin: "0 auto" }}
            source="https://rkdiagnostico.com.br/wp-content/uploads/2015/06/logo_RK_2015_2.png"
          />
          <View
            style={{
              border: "1px solid black",
              padding: "20px",
              marginTop: 30,
            }}
          >
            <Text style={styles.heading}>Solicitação de Exame</Text>
            <View style={styles.containerFather}>
              <View style={styles.containerChild}>
                <Text style={styles.paragraphBold}>Nome do Tutor: </Text>
                <Text style={styles.paragraph}>{data.pet.customer.name}</Text>
              </View>
              <View style={styles.containerChild}>
                <Text style={styles.paragraphBold}>Data e Hora: </Text>
                <Text style={styles.paragraph}>
                  {FormatedDate(
                    new Date(data.finishedIn),
                    "short",
                    "medium"
                  ).replace(",", " -")}
                </Text>
              </View>
            </View>
            <View style={styles.containerChild}>
              <Text style={styles.paragraphBold}>E-mail: </Text>
              <Text style={styles.paragraph}>{data.pet.customer.email}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.paragraphBold}>Dados do Pet: </Text>
              <View style={styles.containerFather}>
                <View style={styles.containerChild}>
                  <Text style={styles.paragraphBold}>Nome do Animal: </Text>
                  <Text style={styles.paragraph}>{data.pet.name}</Text>
                </View>
                <View style={styles.containerChild}>
                  <Text style={styles.paragraphBold}>Espécie: </Text>
                  <Text style={styles.paragraph}>{data.pet.specie}</Text>
                </View>
              </View>
              <View style={styles.containerFather}>
                <View style={styles.containerChild}>
                  <Text style={styles.paragraphBold}>Idade: </Text>
                  <Text style={styles.paragraph}>{data.pet.age}</Text>
                </View>
                <View style={styles.containerChild}>
                  <Text style={styles.paragraphBold}>Sexo do Animal: </Text>
                  <Text style={styles.paragraph}>{data.pet.sex}</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              border: "1px solid black",
              padding: "20px",
              marginTop: 30,
            }}
          >
            <View>
              <Text style={styles.heading}>Exames Solicitados</Text>
              {data.exams.map((exam, index) => (
                <View key={index} style={{ marginTop: 10 }}>
                  <Text style={styles.paragraph}>- {exam.Exams.name}</Text>
                  <View style={styles.containerChild}>
                    <Text style={styles.paragraphBold}>Preparo: </Text>
                    <Text style={styles.paragraph}>{exam.Exams.preparing}</Text>
                  </View>
                </View>
              ))}
              <View style={{ marginTop: 10 }}>
                <View style={styles.containerChild}>
                  <Text style={styles.paragraphBold}>Observações: </Text>
                  <Text style={styles.paragraph}>
                    {!data.observation ? "Sem observações!" : data.observation}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                style={{ width: "10%" }}
                source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojqE7ztWUYLgAOLfIp8OrWRqDI-43JplTC8XdCZ8L9g&s"
              />
              <View style={{ height: "100%", justifyContent: "space-between" }}>
                <Text style={styles.paragraphSM}>
                  RK Diagnóstico - Acesso WhatsApp via QR Code
                </Text>
                <Text style={styles.paragraphSM}>
                  Endereço: R. Ártico, 248 - Jardim do Mar, São Bernardo do
                  Campo - SP, 09726-300
                </Text>
                <Text style={styles.paragraphSM}>Telefone: (11) 4122-3733</Text>
                <Text style={styles.paragraphSM}>
                  Assinado digitalmente por: {data.veterinarians.name} CRMV:{" "}
                  {data.veterinarians.crmv}
                </Text>
              </View>
            </View>
          </View>
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
