# Đóng góp cho Tailgrids

Cảm ơn bạn đã quan tâm đến việc đóng góp cho Tailgrids.
Hướng dẫn này sẽ giúp bạn bắt đầu quy trình đóng góp.

## Cấu trúc dự án

Monorepo của Tailgrids được tổ chức như sau:

- `/apps/docs/content` - Website tài liệu
- `/apps/docs/src/registry/core` - Các core component của Tailgrids
- `/apps/docs/src/components` - Toàn bộ component cho website
- `/apps/docs/src/components/preview` - Toàn bộ component trình bày (presentational)
- `/packages/cli` - Công cụ command-line interface
- `/packages/icons` - Thư viện icon
- `/packages/eslint-config` - Cấu hình ESLint dùng chung
- `/packages/typescript-config` - Cấu hình TypeScript dùng chung

## Nguyên tắc phát triển

Khi đóng góp cho Tailgrids:

- Giữ cho các thay đổi tập trung.
  PR lớn khó review hơn và ít khả năng được chấp nhận.
  Chúng tôi khuyến nghị bạn mở một issue và trao đổi với chúng tôi trước.
- Đảm bảo toàn bộ code là type-safe và tận dụng tối đa các tính năng của TypeScript.
- Viết code rõ ràng, tự diễn giải.
  Chỉ dùng comment khi thực sự cần thiết.
- Tuân theo code style và quy ước hiện có.
- Chúng tôi hướng tới sự ổn định, vì vậy hãy tránh các thay đổi buộc người dùng phải chạy migration hoặc cập nhật config.

## Bắt đầu

Trước khi bắt đầu, hãy chắc chắn bạn đã cài Node.js trên máy. Chúng tôi dùng `npm` làm package manager (đã đi kèm sẵn khi cài mặc định Node.js). Bạn có thể xem hướng dẫn cài đặt [tại đây](https://nodejs.org/en/download) (khuyến nghị bản LTS).

1. Tìm hoặc mở một [issue](https://github.com/TailGrids/tailgrids/issues) mà bạn quan tâm muốn xử lý, hoặc một tính năng bạn muốn thêm.

2. Fork repository về tài khoản GitHub của bạn.

3. Clone bản fork về máy:

   ```bash
   git clone https://github.com/your-username/tailgrids.git
   cd tailgrids
   ```

4. Cài đặt các dependency của dự án:

   ```bash
   npm install
   ```

5. Tạo file `.env` từ file mẫu:
   - Trên hệ thống nền Unix:
     ```bash
     cp -n ./apps/docs/.env.example ./apps/docs/.env
     ```
   - Trên Windows:
     ```batch
     copy /Y .\apps\docs\.env.example .\apps\docs\.env
     ```

   Sau khi tạo file `.env`, hãy điền các giá trị cần thiết.

6. Build dự án:

   Ở nội bộ, chúng tôi dùng toàn bộ icon cục bộ từ `packages/icons`, được expose dưới tên `@tailgrids/icons`. Vì vậy việc build dự án trước khi chạy tài liệu cục bộ là rất quan trọng.

   ```bash
   npm run build
   ```

7. Chạy dự án cục bộ:

   ```bash
   npm run dev
   ```

## Định dạng code

Chúng tôi dùng [Prettier](https://prettier.io/) để format và lint code.
Trước khi commit, hãy đảm bảo code của bạn được format đúng cách:

```bash
# Format toàn bộ code
npm run format

# Kiểm tra các vấn đề linting
npm run lint
```

## Quy trình phát triển

1. Tạo một branch mới cho các thay đổi của bạn:

   Đặt tên branch theo quy ước [Conventional Branch](https://conventional-branch.github.io/).

   ```bash
   git checkout -b type/description
   # Ví dụ: git checkout -b feat/combobox
   ```

2. Thực hiện thay đổi theo các nguyên tắc về code style

3. Commit thay đổi với thông điệp mô tả rõ ràng, tuân theo đặc tả [Conventional Commits](https://www.conventionalcommits.org):

   Với component hoặc tính năng mới, dùng định dạng `fix` hoặc `feat` kèm scope cụ thể:

   ```text
   fix(select): multi select is not working.

   feat(cli): add support for new component generation.
   ```

   Với thay đổi về tài liệu, dùng `docs`:

   ```bash
   docs: fix typos in README

   # Để cụ thể hơn
   docs(installation): improve installation explanation
   ```

   Với các thay đổi mang tính refactor hoặc không làm thay đổi chức năng của thư viện hay
   tài liệu, dùng `chore`:

   ```bash
   chore(refactor): reorganize package exports

   chore: update dependencies to latest versions
   ```

   Mỗi thông điệp commit cần rõ ràng và mang tính mô tả, giải thích thay đổi đó
   làm gì.
   Với tính năng và bản sửa lỗi, hãy nêu bối cảnh về những gì đã được thêm hoặc xử lý.

4. Push branch lên bản fork của bạn

5. Mở một pull request nhắm vào branch **main**. Trong phần mô tả PR:
   - Mô tả rõ bạn đã thay đổi gì và tại sao
   - Đưa vào bối cảnh hoặc thông tin nền liên quan
   - Liệt kê mọi breaking change hoặc deprecation
   - Thêm screenshot cho các thay đổi về UI
   - Tham chiếu các issue hoặc discussion liên quan

6. Đặt tiêu đề pull request bằng một mô tả ngắn về các thay đổi đã thực hiện và số issue hoặc bug liên quan đến thay đổi của bạn. Ví dụ, bạn có thể đặt tiêu đề như "feat(cli): add support for new component generation to resolve #2201".

7. Trong phần mô tả pull request, hãy giải thích các thay đổi bạn đã thực hiện, mọi vấn đề bạn nghĩ có thể tồn tại với pull request của mình, và mọi câu hỏi bạn muốn hỏi maintainer. Không sao nếu pull request của bạn chưa hoàn hảo (không PR nào là hoàn hảo cả), reviewer sẽ giúp bạn khắc phục các vấn đề và cải thiện nó!

8. Sau khi gửi pull request, bạn có thể chờ phản hồi từ maintainer trong vài ngày làm việc. Nếu sau một tuần vẫn chưa nhận được phản hồi, việc gửi một tin nhắn nhắc nhở thân thiện là hoàn toàn ổn.

9. Nếu pull request của bạn không được chấp nhận, chúng tôi sẽ giải thích lý do và đề xuất cải thiện. Sau đó bạn có thể thực hiện các thay đổi được đề xuất và gửi lại pull request.

10. Hãy ăn mừng thành công sau khi pull request của bạn được merge! 🎉 🎉

## Quy trình Pull Request

1. Trước khi tạo PR, hãy tạo một issue và trao đổi với chúng tôi
2. Tham chiếu mọi issue liên quan trong phần mô tả PR
3. Đảm bảo toàn bộ test pass và build thành công
4. Cập nhật tài liệu khi cần
5. Giữ PR tập trung vào một tính năng hoặc một bản sửa lỗi duy nhất
6. Phản hồi nhanh với các góp ý trong quá trình code review.

## Code Style

- Tuân theo code style hiện có
- Sử dụng type và interface của TypeScript một cách hiệu quả
- Giữ các function nhỏ gọn và tập trung
- Dùng tên biến và tên function có ý nghĩa
- Thêm comment cho những đoạn logic phức tạp
- Tuân theo các quy tắc định dạng
