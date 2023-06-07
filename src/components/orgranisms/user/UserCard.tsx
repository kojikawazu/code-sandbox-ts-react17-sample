import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

// propsの型
type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

// ユーザーカードコンポーネント
export const UserCard: VFC<Props> = memo((props) => {
  // propsの分割代入
  const { id, imageUrl, userName, fullName, onClick } = props;

  return (
    <>
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: "0.8" }}
        onClick={() => onClick(id)}
      >
        <Stack textAlign="center">
          {/** プロフィール画像 */}
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageUrl}
            alt="プロフィール"
            m="auto"
          />
          {/** 自己紹介 */}
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    </>
  );
});
