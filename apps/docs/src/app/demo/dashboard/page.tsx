import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/registry/core/card";
import { Badge } from "@/registry/core/badge";
import { Button } from "@/registry/core/button";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";

const navigation = [
  "Tổng quan",
  "Khách hàng",
  "Đơn hàng",
  "Báo cáo",
  "Cài đặt"
];

const orders = [
  { id: "#INV-1024", customer: "Nguyễn Minh Anh", amount: "12.400.000đ", status: "Hoàn tất", color: "success" as const },
  { id: "#INV-1023", customer: "Trần Quốc Huy", amount: "8.950.000đ", status: "Đang xử lý", color: "warning" as const },
  { id: "#INV-1022", customer: "Lê Thanh Hà", amount: "6.200.000đ", status: "Hoàn tất", color: "success" as const },
  { id: "#INV-1021", customer: "Phạm Gia Bảo", amount: "4.750.000đ", status: "Chờ thanh toán", color: "gray" as const }
];

function MetricCard({
  label,
  value,
  change,
  positive = true
}: {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <Card className="border border-base-200 shadow-sm">
      <CardHeader className="pb-0">
        <p className="text-sm font-medium text-text-100">{label}</p>
      </CardHeader>
      <CardContent className="pb-5">
        <div className="mt-2 flex items-end justify-between gap-4">
          <p className="text-2xl font-bold tracking-tight text-title-50">{value}</p>
          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${
              positive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {change}
          </span>
        </div>
        <p className="mt-2 text-xs text-text-100">So với tháng trước</p>
      </CardContent>
    </Card>
  );
}

export default function AnalyticsDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-title-50">
      <div className="grid min-h-screen lg:grid-cols-[248px_minmax(0,1fr)]">
        <aside className="border-r border-base-200 bg-white px-4 py-6">
          <div className="flex items-center gap-3 px-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">T</div>
            <span className="text-lg font-bold tracking-tight">Tailgrids Demo</span>
          </div>

          <nav className="mt-10 space-y-1" aria-label="Điều hướng chính">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-text-100">Menu</p>
            {navigation.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? "bg-blue-50 text-blue-700"
                    : "text-text-100 hover:bg-slate-50 hover:text-title-50"
                }`}
              >
                <span className={`size-2 rounded-full ${index === 0 ? "bg-blue-600" : "bg-slate-300"}`} />
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-10 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-semibold">Cần hỗ trợ?</p>
            <p className="mt-1 text-xs leading-5 text-text-100">Khám phá component và pattern có sẵn trong Tailgrids.</p>
            <Button variant="primary" size="sm" className="mt-4 w-full">Xem tài liệu</Button>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="flex items-center justify-between border-b border-base-200 bg-white px-5 py-4 sm:px-8">
            <div>
              <p className="text-sm text-text-100">Thứ Tư, 12 tháng 8</p>
              <h1 className="mt-1 text-xl font-bold tracking-tight">Tổng quan kinh doanh</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" appearance="outline" size="sm">Xuất báo cáo</Button>
              <Button variant="primary" size="sm">Tạo đơn hàng</Button>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 p-5 sm:p-8">
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard label="Tổng doanh thu" value="245.800.000đ" change="+12,5%" />
              <MetricCard label="Đơn hàng mới" value="1.284" change="+8,2%" />
              <MetricCard label="Khách hàng hoạt động" value="8.492" change="+4,8%" />
              <MetricCard label="Tỷ lệ hoàn tiền" value="1,24%" change="-0,3%" positive={false} />
            </section>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.85fr)]">
              <Card className="border border-base-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Doanh thu theo tháng</CardTitle>
                  <CardDescription>Hiệu suất doanh thu trong 12 tháng gần nhất</CardDescription>
                </CardHeader>
                <CardContent className="pb-5">
                  <div className="relative mt-3 h-64 overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-b from-blue-50/70 to-white p-5">
                    <div className="absolute inset-x-5 top-8 border-t border-dashed border-slate-200" />
                    <div className="absolute inset-x-5 top-1/2 border-t border-dashed border-slate-200" />
                    <div className="absolute inset-x-5 bottom-12 border-t border-dashed border-slate-200" />
                    <svg viewBox="0 0 760 210" className="absolute inset-x-5 bottom-9 h-48 w-[calc(100%-2.5rem)]" role="img" aria-label="Biểu đồ doanh thu tăng dần theo tháng">
                      <defs>
                        <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 164 C45 156 62 140 108 146 S167 118 214 126 S277 100 324 110 S385 78 432 88 S495 62 542 75 S606 35 651 45 S710 15 760 25 L760 210 L0 210 Z" fill="url(#revenueFill)" />
                      <path d="M0 164 C45 156 62 140 108 146 S167 118 214 126 S277 100 324 110 S385 78 432 88 S495 62 542 75 S606 35 651 45 S710 15 760 25" fill="none" stroke="#2563eb" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                    <div className="absolute inset-x-5 bottom-3 flex justify-between text-xs text-text-100">
                      {["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"].map((month) => <span key={month}>{month}</span>)}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-base-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Mục tiêu tháng 8</CardTitle>
                  <CardDescription>Tiến độ theo chỉ số chính</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pb-5">
                  {[
                    ["Doanh thu", "85%", "bg-blue-600"],
                    ["Khách hàng mới", "64%", "bg-violet-500"],
                    ["Tỷ lệ giữ chân", "72%", "bg-emerald-500"]
                  ].map(([label, progress, color]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-title-50">{label}</span>
                        <span className="text-text-100">{progress}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full rounded-full ${color}`} style={{ width: progress }} />
                      </div>
                    </div>
                  ))}
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-blue-900">Bạn đang đi đúng kế hoạch</p>
                    <p className="mt-1 text-xs leading-5 text-blue-700">Cần thêm 18 đơn hàng để đạt mục tiêu doanh thu tháng này.</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Card className="border border-base-200 shadow-sm">
              <CardHeader className="flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Đơn hàng gần đây</CardTitle>
                  <CardDescription>Theo dõi những giao dịch mới nhất</CardDescription>
                </div>
                <Button variant="ghost" appearance="outline" size="sm">Xem tất cả</Button>
              </CardHeader>
              <CardContent className="pb-5">
                <TableRoot>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mã đơn</TableHead>
                      <TableHead>Khách hàng</TableHead>
                      <TableHead>Giá trị</TableHead>
                      <TableHead>Trạng thái</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="text-sm font-semibold text-title-50">{order.id}</TableCell>
                        <TableCell className="text-sm">{order.customer}</TableCell>
                        <TableCell className="text-sm text-title-50">{order.amount}</TableCell>
                        <TableCell><Badge color={order.color}>{order.status}</Badge></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </TableRoot>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
