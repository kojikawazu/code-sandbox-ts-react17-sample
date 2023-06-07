import {
  ChangeEvent,
  memo,
  useEffect,
  useState,
  useCallback,
  VFC
} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from "@chakra-ui/react";

import { LoginUser } from "../../../types/api/loginUser";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

// propsの型
type Props = {
  user: LoginUser | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

// ユーザー詳細モーダルコンポーネント
export const UserDetailModal: VFC<Props> = memo((props) => {
  // propsの分割代入
  const { user, isOpen, isAdmin = false, onClose } = props;

  // state
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect
  // 初回レンダリングだけ関数を実行する
  // userに変化あれば関数を実行する
  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  // 各入力欄に変更があった時の挙動
  const onChangeUserName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);
  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onChangePhone = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }, []);

  // 更新ボタン押下時の挙動
  const onClickUpdate = useCallback(() => {
    alert("更新");
    console.log(`username: ${username}`);
    console.log(`name:     ${name}`);
    console.log(`email:    ${email}`);
    console.log(`phone:    ${phone}`);
  }, [username, name, email, phone]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              {/** 名前 */}
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={username}
                  onChange={onChangeUserName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              ]{/** フルネーム */}
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  onChange={onChangeName}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              {/** Eメール */}
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              {/** TEL */}
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  onChange={onChangePhone}
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          {/** 管理人の場合、更新ボタン表示 */}
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});
