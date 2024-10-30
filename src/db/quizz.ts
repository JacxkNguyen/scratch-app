import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image?: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      ques: "Scratch là gì?",
      choose: [
        "a. Một ngôn ngữ lập trình dành cho trẻ em",
        "b. Một trò chơi",
        "c. Một phần mềm xử lý văn bản",
      ],
      ans: 0,
    },
    {
      ques: "Trong Scratch, nhân vật được gọi là gì?",
      choose: ["a. Code", "b. Sprite", "c. Background"],
      ans: 1,
    },
    {
      ques: "Khối lệnh nào dùng để di chuyển nhân vật?",
      choose: ["a. Say", "b. Move", "c. Turn"],
      ans: 1,
    },
    {
      ques: "Khối lệnh nào để thay đổi kích thước của Sprite?",
      choose: ["a. Change size by", "b. Move", "c. Glide"],
      ans: 0,
    },
    {
      ques: "Khối lệnh “forever” trong Scratch có chức năng gì?",
      choose: [
        "a. Kết thúc chương trình",
        "b. Chạy một hành động một lần",
        "c. Lặp lại một hành động mãi mãi",
      ],
      ans: 2,
    },
    {
      ques: "Trong Scratch, khối lệnh nào dùng để phát âm thanh?",
      choose: ["a. Play sound", "b. Move", "c. Change costume"],
      ans: 0,
    },
    {
      ques: "Khối lệnh “wait 1 second” làm gì?",
      choose: [
        "a. Thay đổi trang phục sau 1 giây",
        "b. Di chuyển nhân vật 1 giây",
        "c. Trì hoãn câu lệnh 1 giây",
      ],
      ans: 2,
    },
    {
      ques: "Khối lệnh “when green flag clicked” có tác dụng gì?",
      choose: [
        "a. Kết thúc chương trình",
        "b. Di chuyển nhân vật",
        "c. Bắt đầu chương trình",
      ],
      ans: 2,
    },
    {
      ques: "Khối lệnh nào giúp thay đổi trang phục của Sprite?",
      choose: ["a. Change costume", "b. Move", "c. Say"],
      ans: 0,
    },
  ],
  medium: [
    {
      ques: 'Khối lệnh "repeat [10]" trong Scratch có chức năng gì?',
      choose: [
        "a. Kết thúc chương trình",
        "b. Chạy một hành động một lần",
        "c. Lặp lại một hành động 10 lần",
      ],
      ans: 2,
    },
    {
      ques: "Trong Scratch, khối lệnh nào dùng để phát âm thanh?",
      choose: ["a. Play sound", "b. Move", "c. Change costume"],
      ans: 0,
    },
    {
      ques: 'Khối lệnh "wait 1 second" làm gì?',
      choose: [
        "a. Thay đổi trang phục sau 1 giây",
        "b. Di chuyển nhân vật 1 giây",
        "c. Tạm dừng chương trình trong 1 giây",
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh "when green flag clicked" có tác dụng gì?',
      choose: [
        "a. Kết thúc chương trình",
        "b. Di chuyển nhân vật",
        "c. Bắt đầu chương trình",
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh "change x by [10]" có tác dụng gì?',
      choose: [
        "a. Di chuyển nhân vật 10 bước sang phải",
        "b. Di chuyển nhân vật 10 bước sang trái",
        "c. Di chuyển nhân vật 10 bước lên trên",
      ],
      ans: 0,
    },
    {
      ques: "Trong Scratch, khối lệnh nào dùng để kiểm tra xem nhân vật có chạm vào màu sắc nhất định không?",
      choose: [
        "a. if <touching [sprite name]?> then",
        "b. if <touching color [color]?> then",
        "c. if <key [space] pressed?> then",
      ],
      ans: 1,
    },
  ],

  hard: [
    {
      ques: 'Khối lệnh "repeat until <điều kiện>" có tác dụng gì trong Scratch?',
      choose: [
        "a. Lặp lại mãi mãi cho đến khi chương trình kết thúc",
        "b. Lặp lại các hành động bên trong cho đến khi điều kiện là đúng",
        "c. Chạy mãi mãi và bỏ qua điều kiện",
      ],
      ans: 1,
    },
    {
      ques: "Lệnh nào sau đây giúp nhân vật di chuyển đến vị trí ngẫu nhiên trên sân khấu?",
      choose: [
        "a. go to x: [0] y: [0]",
        "b. glide [1] secs to random position",
        "c. point towards [mouse-pointer]",
      ],
      ans: 1,
    },
    {
      ques: 'Khối lệnh "broadcast [message1]" có tác dụng gì?',
      choose: [
        "a. Dừng tất cả các chương trình",
        "b. Gửi một thông điệp để các script khác có thể nhận và thực hiện hành động",
        "c. Thay đổi trang phục của nhân vật",
      ],
      ans: 1,
    },
    {
      ques: "Nếu muốn nhân vật di chuyển ngẫu nhiên khi chạm vào cạnh sân khấu, bạn sẽ sử dụng lệnh nào?",
      choose: [
        "a. if on edge, bounce",
        "b. point in direction [90]",
        "c. change x by [10]",
      ],
      ans: 0,
    },
    {
      ques: "Làm thế nào để kiểm tra xem nhân vật có đang di chuyển hay không?",
      choose: [
        'a. Sử dụng khối lệnh "if <touching [sprite]?> then"',
        "b. Sử dụng biến để lưu trạng thái di chuyển và kiểm tra giá trị của nó",
        'c. Sử dụng khối lệnh "if <distance to [mouse-pointer] > 0> then"',
      ],
      ans: 1,
    },
    {
      ques: "Khối lệnh nào giúp nhân vật hướng về phía một nhân vật khác?",
      choose: [
        "a. point in direction [90]",
        "b. point towards [sprite name]",
        "c. glide [1] secs to x: [0] y: [0]",
      ],
      ans: 1,
    },
  ],
};
