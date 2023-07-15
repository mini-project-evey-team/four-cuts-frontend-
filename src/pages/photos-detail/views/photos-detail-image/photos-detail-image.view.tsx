import { FC } from "react";
import { HAPPYCAT_URL } from "../../../../components/happy-cat";
import { ImageContentsComponent } from "../../../../components";

type IPhotosDetailImageViewProps = {};

export const PhotosDetailImageView: FC<IPhotosDetailImageViewProps> = ({}) => {
  const data = [
    {
      id: "1",
      title: "dd",
      contents: "asd",
      imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
    },
    {
      id: "2",
      title: "dd",
      contents: "asd",
      imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
    },
    {
      id: "3",
      title: "dd",
      contents: "asd",
      imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
    },
    {
      id: "4",
      title: "dd",
      contents: "asd",
      imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
    },
    {
      id: "5",
      title: "dd",
      contents: "asd",
      imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
    },
    {
      id: "6",
      title: "dd",
      contents: "asd",
      imageUrl: [HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL, HAPPYCAT_URL],
    },
  ];
  return <ImageContentsComponent fourPhotos={data[0]} width="400px" />;
};