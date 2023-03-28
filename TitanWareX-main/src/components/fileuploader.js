import { FileUploader } from '@aws-amplify/ui-react';

export const PublicUpload = () => {
  return (
    <FileUploader
      hasMultipleFiles={false}
      variation="drop"
      acceptedFileTypes={['image/*']}
      accessLevel="public"
    />
  );
};

