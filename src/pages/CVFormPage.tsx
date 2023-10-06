import { CVForm } from '@features/cv-builder';
import Header from '../components/Header';

export interface ICVFormPage {}

function CVFormPage({}: ICVFormPage) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex justify-center px-8 py-8 gap-8 max-w-5xl">
        <div className="grow max-w-2xl">
          <CVForm />
        </div>
        <div className="grow">Preview</div>
      </div>
    </div>
  );
}

export default CVFormPage;
