# Hướng dẫn sử dụng Component

Trang này hướng dẫn cách cài đặt và sử dụng các React component của Tailgrids trong dự án của bạn.

## Yêu cầu

- Node.js (khuyến nghị bản LTS)
- Một dự án React / Next.js / Vite
- Đã cấu hình Tailwind CSS

## 1. Khởi tạo Tailgrids

Chạy lệnh init để tạo file config, base style và cài các dependency cần thiết:

```bash
npx @tailgrids/cli@latest init
```

## 2. Thêm component

Dùng Tailgrids CLI để thêm từng component vào dự án:

```bash
npx @tailgrids/cli@latest add button
```

Component sẽ được copy vào thư mục components của bạn (ví dụ `@/components/core/button`), nên bạn có toàn quyền chỉnh sửa source.

## 3. Import và sử dụng

```tsx
import { Button } from "@/components/core/button";

export default function Home() {
  return <Button variant="primary">Hello Tailgrids!</Button>;
}
```

## 4. Tùy biến với Tailwind CSS

Mọi component đều tùy biến 100% bằng utility class. Bạn có thể truyền thêm `className` để override style:

```tsx
<Button variant="primary" className="rounded-full px-6">
  Nút bo tròn
</Button>
```

Ngoài ra bạn có thể chỉnh design token và theming để đồng bộ toàn hệ thống.

## 5. Ví dụ với một số component phổ biến

### Input

```tsx
import { Input } from "@/components/core/input";

<Input placeholder="Nhập email của bạn" />
```

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent } from "@/components/core/dialog";

<Dialog>
  <DialogTrigger>Mở hộp thoại</DialogTrigger>
  <DialogContent>Nội dung dialog</DialogContent>
</Dialog>
```

### Checkbox

```tsx
import { Checkbox } from "@/components/core/checkbox";

<Checkbox label="Đồng ý điều khoản" />
```

## 6. Tính năng tích hợp sẵn

- Accessibility (a11y) và keyboard navigation
- Dark mode
- Responsive design
- Hỗ trợ TypeScript đầy đủ (JSX/TSX)

## 7. Danh sách component

Xem toàn bộ component kèm ví dụ, API reference và code copy-paste tại: https://tailgrids.com/docs/components

Một số nhóm component core: Accordion, Alert, Avatar, Badge, Button, Card, Carousel, Checkbox, Combobox, Date Picker, Dialog, Drawer, Dropdown, Input, Pagination, Popover, Select, Table, Tabs, Toast, Tooltip, ...

## Liên kết hữu ích

- Documentation: https://tailgrids.com/docs
- Tất cả component: https://tailgrids.com/docs/components
- UI Blocks: https://tailgrids.com/blocks
- Templates: https://tailgrids.com/templates
