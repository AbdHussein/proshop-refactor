import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import {
  Container,
  Icon,
  Typography,
  FileInput,
  Image,
} from '../../../components';
import { InputFile } from '../../../components/Form/checkBox/style';
import { ImagesContainer, WarperFile } from '../style';

const ProductImages = ({ formik }: any) => {
  const [preview0, setPreview0] = useState<any>(formik.values.images[0]);
  const [preview1, setPreview1] = useState<any>(formik.values.images[1]);
  const [preview2, setPreview2] = useState<any>(formik.values.images[2]);
  const [preview3, setPreview3] = useState<any>(formik.values.images[3]);
  return (
    <ImagesContainer
      direction="column"
      width="30%"
      max-width="25rem"
      margin="2em 0"
    >
      <WarperFile htmlFor="file">
        {preview0 ? (
          <Image src={preview0} />
        ) : (
          <>
            <Icon icon={<FaCloudUploadAlt color="#707070" />} size="7em" />
            <Typography variant="p" color="#707070" margin-top="1em">
              Images <small>(4 images allowed)</small>
            </Typography>
          </>
        )}
      </WarperFile>
      <InputFile
        id="file"
        name="images[0]"
        onChange={(e: any) => {
          setPreview0([URL.createObjectURL(e.target.files[0])]);
          formik.setFieldValue('images[0]', e.currentTarget.files[0]);
        }}
      />

      <Container justify-content="space-between" margin="1em 0">
        <FileInput
          name="images[1]"
          label=""
          src={preview1}
          onChange={(e: any) => {
            setPreview1(URL.createObjectURL(e.target.files[0]));
            formik.setFieldValue('images[1]', e.currentTarget.files[0]);
          }}
        />
        <FileInput
          name="images[2]"
          label=""
          margin="0 0.5em"
          src={preview2}
          onChange={(e: any) => {
            setPreview2(URL.createObjectURL(e.target.files[0]));
            formik.setFieldValue('images[2]', e.currentTarget.files[0]);
          }}
        />
        <FileInput
          name="images[3]"
          label=""
          src={preview3}
          onChange={(e: any) => {
            setPreview3(URL.createObjectURL(e.target.files[0]));
            formik.setFieldValue('images[3]', e.currentTarget.files[0]);
          }}
        />
      </Container>
    </ImagesContainer>
  );
};

export default ProductImages;
