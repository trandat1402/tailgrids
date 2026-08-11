"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback
} from "@/registry/core/avatar";
import { Badge } from "@/registry/core/badge";
import { Button } from "@/registry/core/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/registry/core/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/registry/core/chart";
import { Progress } from "@/registry/core/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/registry/core/sidebar";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";

const navigation = ["Tổng quan", "Khách hàng", "Đơn hàng", "Báo cáo", "Cài đặt"];

const revenue = [
  { month: "T1", value: 82 },
  { month: "T2", value: 96 },
  { month: "T3", value: 90 },
  { month: "T4", value: 112 },
  { month: "T5", value: 106 },
  { month: "T6", value: 128 },
  { month: "T7", value: 120 },
  { month: "T8", value: 146 },
  { month: "T9", value: 138 },
  { month: "T10", value: 161 },
  { month: "T11", value: 154 },
  { month: "T12", value: 180 }
];

const goals = [
  { label: "Doanh thu", value: 85 },
  { label: "Khách hàng mới", value: 64 },
  { label: "Tỷ lệ giữ chân", value: 72 }
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
  color = "success"
}: {
  label: string;
  value: string;
  change: string;
  color?: "success" | "warning" | "gray";
}) {
  return (
    <Card className="border border-base-200 shadow-xs">
      <CardHeader className="pb-0">
        <CardDescription className="mt-0 text-sm">{label}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-end justify-between gap-4 pb-5">
        <p className="text-2xl font-semibold text-title-50">{value}</p>
        <Badge color={color}>{change}</Badge>
      </CardContent>
    </Card>
  );
}

export default function AnalyticsDashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex h-10 items-center gap-3 px-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white-100">T</div>
            <span className="truncate text-base font-semibold text-title-50">Tailgrids</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Điều hướng</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item, index) => (
                  <SidebarMenuItem key={item}>
                    <SidebarMenuButton isActive={index === 0} tooltip={item}>
                      <span aria-hidden="true" className="flex size-5 items-center justify-center rounded bg-background-soft-200 text-xs font-semibold text-text-100">{index + 1}</span>
                      <span>{item}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <Card className="bg-background-soft-50 p-3">
            <p className="text-sm font-medium text-title-50">Tailgrids UI</p>
            <p className="mt-1 text-xs leading-5 text-text-100">Component và token đang dùng cho màn hình này.</p>
            <Button size="xs" className="mt-3 w-full">Xem tài liệu</Button>
          </Card>
        </SidebarFooter>
      </Sidebar>

      <main className="min-w-0 flex-1 bg-background-soft-50">
        <header className="flex min-h-18 items-center justify-between gap-4 border-b border-base-200 bg-background-100 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger aria-label="Thu gọn điều hướng">☰</SidebarTrigger>
            <div>
              <p className="text-xs text-text-100">Thứ Tư, 12 tháng 8</p>
              <h1 className="text-lg font-semibold text-title-50">Tổng quan kinh doanh</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary" appearance="outline" size="sm">Xuất báo cáo</Button>
            <Button size="sm">Tạo đơn hàng</Button>
            <Avatar size="sm">
              <AvatarFallback>Đ</AvatarFallback>
              <AvatarBadge size="sm" status="online" />
            </Avatar>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard label="Tổng doanh thu" value="245.800.000đ" change="+12,5%" />
            <MetricCard label="Đơn hàng mới" value="1.284" change="+8,2%" />
            <MetricCard label="Khách hàng hoạt động" value="8.492" change="+4,8%" />
            <MetricCard label="Tỷ lệ hoàn tiền" value="1,24%" change="-0,3%" color="warning" />
          </section>

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.85fr)]">
            <Card className="border border-base-200 shadow-xs">
              <CardHeader>
                <CardTitle className="text-lg">Doanh thu theo tháng</CardTitle>
                <CardDescription>Hiệu suất trong 12 tháng gần nhất</CardDescription>
              </CardHeader>
              <CardContent className="pb-5">
                <ChartContainer width="100%" height={280}>
                  <AreaChart data={revenue} margin={{ top: 12, right: 8, left: -18, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary-500)" stopOpacity={0.28} />
                        <stop offset="95%" stopColor="var(--color-primary-500)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={38} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      name="Doanh thu"
                      stroke="var(--color-primary-500)"
                      strokeWidth={2}
                      fill="url(#revenue)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border border-base-200 shadow-xs">
              <CardHeader>
                <CardTitle className="text-lg">Mục tiêu tháng 8</CardTitle>
                <CardDescription>Tiến độ theo chỉ số chính</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pb-5">
                {goals.map((goal) => (
                  <div key={goal.label}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-title-50">{goal.label}</span>
                      <span className="text-sm text-text-100">{goal.value}%</span>
                    </div>
                    <Progress progress={goal.value} />
                  </div>
                ))}
                <Badge color="primary" size="md">Cần thêm 18 đơn hàng để đạt mục tiêu</Badge>
              </CardContent>
            </Card>
          </section>

          <Card className="border border-base-200 shadow-xs">
            <CardHeader className="flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg">Đơn hàng gần đây</CardTitle>
                <CardDescription>Theo dõi giao dịch mới nhất</CardDescription>
              </div>
              <Button variant="primary" appearance="outline" size="sm">Xem tất cả</Button>
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
      </main>
    </SidebarProvider>
  );
}
