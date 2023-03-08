import Head from 'next/head';
import CheckInForm from '../../components/checkin_form';
import DefaultLayout from '../../components/layout/default-layout';
import {BsQuestionDiamondFill} from 'react-icons/bs';

export default function CheckinFormTest() {
  return (
    <DefaultLayout>
      <Head>
        <title>LayoutDefaultTest</title>
        <meta name="description" content="" />
      </Head>
      <div>
        <CheckInForm
          title="Before getting into the actual form.	Are there any subjects you don’t feel comfortable answering questions about?"
          text="Religion"
          >
          <BsQuestionDiamondFill />
        </CheckInForm>
      </div>
    </DefaultLayout>
  );
}
