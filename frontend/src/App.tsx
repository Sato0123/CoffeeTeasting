import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";

import { z } from "zod";
import './App.css'


const RosterSchema = z
  .object({
    company_name: z
      .string()
      .min(1, "名前は必須です")
      .max(64, "名前が長すぎます"),
    company_name2: z
      .string()
      .optional(),
    user_name: z
      .string()
      .optional(),
    address: z
      .string()
      .optional(),
    phone_number: z
      .string()
      .optional(),
    email: z
      .string()
      .optional(),
    prefecture: z
      .string()
      .optional(),
  })
  ;

type RosterForm = z.infer<typeof RosterSchema>;


function App() {
  const {
    register,
    handleSubmit,
  } = useForm<RosterForm>({
    resolver: zodResolver(RosterSchema),
  });

  const onSubmit = async (data: RosterForm) => {
    // const navigate = useNavigate();
    try {
      const response = await fetch(`http://127.0.0.1:8001`, {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.ok) {
        alert("登録が完了しました。")
        console.log(response.body)
        // navigate("/done");
      } else {
        alert("登録に失敗しました。")
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("登録に失敗しました。")
      return;
    }
  };

  return (
    <>
      <h1>~Orithankyou Coffee Competition~</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", margin: "0 auto", width: "fit-content", flexDirection: "column", maxWidth: "40%" }}>
        <input {...register("company_name")} placeholder="社名" />
        <input {...register("company_name2")} placeholder="ふりがな" />
        <input {...register("user_name")} placeholder="担当者名" />
        <input {...register("address")} placeholder="住所" />
        <input {...register("phone_number")} placeholder="電話番号" />
        <input {...register("email")} placeholder="email" />
        <input {...register("prefecture")} placeholder="都道府県" />

        <button type="submit">送信</button>
      </form >
    </>
  )
}

export default App
