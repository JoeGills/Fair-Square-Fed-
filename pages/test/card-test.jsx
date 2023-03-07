import Head from 'next/head';
import Card from '../../components/card';
import { MdStackedLineChart } from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import DefaultLayout from '../../components/layout/default-layout';


export default function CardTestPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>card test</title>
      </Head>
      <div
        className="d-flex justify-content-between"
        style={{
          margin: '4rem',
        }}>
        <Card
          style={{ width: '30%', marginBottom: '1rem' }}
          title="Progress"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante dolor, varius eget nulla at, finibus porttitor magna. Nam convallis magna odio, vel tincidunt ligula condimentum non.">
          <MdStackedLineChart style={{ fontSize: '2rem' }} />
        </Card>
        <Card
          style={{ width: '30%', marginBottom: '1rem' }}
          title="Equality"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante dolor, varius eget nulla at, finibus porttitor magna. Nam convallis magna odio, vel tincidunt ligula condimentum non.">
          <FaBalanceScale style={{ fontSize: '2rem' }} />
        </Card>
        <Card
          style={{ width: '30%', marginBottom: '1rem' }}
          title="Security"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante dolor, varius eget nulla at, finibus porttitor magna. Nam convallis magna odio, vel tincidunt ligula condimentum non.">
          <MdOutlineSecurity style={{ fontSize: '2rem' }} />
        </Card>
      </div>
    </DefaultLayout>
  );
}
