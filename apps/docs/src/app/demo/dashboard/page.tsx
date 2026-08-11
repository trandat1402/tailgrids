"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";
import {
  BarChart2,
  Bell1,
  BotUser1,
  Calendar,
  Cart2,
  CheckCircle1,
  ChevronDown,
  ClockThree,
  DashboardSquare1,
  Dollar,
  Gear1,
  Megaphone1,
  MenuHamburger1,
  MenuKebab1,
  MoonHalfLeft5,
  SackDollar,
  Search1,
  TrendUp2,
  UserMultiple1
} from "@tailgrids/icons";
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
import { Input } from "@/registry/core/input";
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

const navigation = [
  { label: "Dashboard", icon: DashboardSquare1, active: true },
  { label: "eCommerce", icon: Cart2 },
  { label: "Analytics", icon: BarChart2 },
  { label: "Marketing", icon: Megaphone1 },
  { label: "CRM", icon: UserMultiple1 },
  { label: "Calendar", icon: Calendar },
  { label: "Cài đặt", icon: Gear1 }
];

const statistics = [
  { month: "T2", revenue: 184, target: 66 },
  { month: "T3", revenue: 178, target: 72 },
  { month: "T4", revenue: 172, target: 68 },
  { month: "T5", revenue: 166, target: 64 },
  { month: "T6", revenue: 160, target: 62 },
  { month: "T7", revenue: 156, target: 60 }
];

const schedule = [
  { date: "Thứ Tư, 11/6", title: "Business Analytics Press", time: "09:20" },
  { date: "Thứ Sáu, 15/8", title: "Business Sprint", time: "10:35" },
  { date: "Thứ Năm, 18/9", title: "Customer Review Meeting", time: "11:15" }
];

function IconButton({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      variant="primary"
      appearance="outline"
      iconOnly
      size="sm"
      aria-label={label}
    >
      {children}
    </Button>
  );
}

function MetricCard({
  value,
  label,
  trend,
  negative = false
}: {
  value: string;
  label: string;
  trend: string;
  negative?: boolean;
}) {
  return (
    <Card className="border border-base-200 shadow-xs">
      <CardContent className="py-5">
        <p className="text-2xl font-semibold tracking-tight text-title-50">{value}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-sm text-text-100">{label}</p>
          <Badge
            color={negative ? "error" : "success"}
            prefixIcon={<TrendUp2 size={12} className={negative ? "rotate-180" : ""} />}
          >
            {trend}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function CircleGauge() {
  return (
    <div className="mx-auto mt-1 w-full max-w-55">
      <svg viewBox="0 0 200 116" className="w-full" role="img" aria-label="Doanh thu 90 đô la trong tháng 6">
        <path
          d="M 24 98 A 76 76 0 0 1 176 98"
          fill="none"
          stroke="var(--border-color-base-200)"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M 24 98 A 76 76 0 0 1 176 98"
          fill="none"
          stroke="var(--color-primary-500)"
          strokeDasharray="190 239"
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>
      <div className="-mt-10 text-center">
        <p className="text-xs text-text-100">Tháng 6</p>
        <p className="mt-1 text-3xl font-semibold text-title-50">$90</p>
      </div>
    </div>
  );
}

export default function AnalyticsDashboardPage() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="px-3 pt-4">
          <div className="flex h-10 items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white-100">T</div>
            <span className="truncate text-lg font-semibold tracking-tight text-title-50">TailAdmin</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="mt-6 px-3">
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active} tooltip={item.label}>
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-base-200 p-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="AI Assistant">
                <BotUser1 size={18} />
                <span>AI Assistant</span>
                <Badge color="success" className="ml-auto">New</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <main className="min-w-0 flex-1 bg-background-soft-50">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-base-200 bg-background-100 px-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <SidebarTrigger aria-label="Thu gọn điều hướng">
              <MenuHamburger1 size={18} />
            </SidebarTrigger>
            <label className="relative hidden w-full max-w-75 md:block">
              <Search1 size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-100" />
              <Input aria-label="Tìm kiếm" placeholder="Tìm kiếm hoặc nhập lệnh..." className="w-full py-2 pl-9 pr-14 text-sm" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-background-soft-100 px-1.5 py-0.5 text-[10px] font-medium text-text-100">⌘ K</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <IconButton label="Chuyển giao diện"><MoonHalfLeft5 size={18} /></IconButton>
            <IconButton label="Thông báo"><Bell1 size={18} /></IconButton>
            <Avatar size="sm">
              <AvatarFallback>Đ</AvatarFallback>
              <AvatarBadge size="sm" status="online" />
            </Avatar>
            <ChevronDown size={16} className="hidden text-text-100 sm:block" />
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-5 p-4 sm:p-6">
          <section className="grid gap-4 md:grid-cols-3">
            <MetricCard value="$120,369" label="Giao dịch đang hoạt động" trend="20%" />
            <MetricCard value="$234,210" label="Tổng doanh thu" trend="9,0%" />
            <MetricCard value="874" label="Giao dịch đã đóng" trend="4,5%" negative />
          </section>

          <section className="grid gap-5 xl:grid-cols-[minmax(0,1.75fr)_minmax(17rem,0.8fr)]">
            <Card className="border border-base-200 shadow-xs">
              <CardHeader className="flex-row items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">Thống kê</CardTitle>
                  <CardDescription>Chỉ tiêu theo từng tháng</CardDescription>
                </div>
                <div className="hidden rounded-lg border border-base-200 bg-background-soft-50 p-1 sm:flex">
                  <Button variant="primary" appearance="fill" size="xs">Tháng</Button>
                  <Button variant="ghost" size="xs">Quý</Button>
                  <Button variant="ghost" size="xs">Năm</Button>
                </div>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="grid gap-4 border-y border-base-200 py-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xl font-semibold text-title-50">$212,142.12</p>
                    <p className="mt-1 text-xs text-text-100">Lợi nhuận trung bình <Badge color="success">+23,2%</Badge></p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-title-50">$30,321.23</p>
                    <p className="mt-1 text-xs text-text-100">Lợi nhuận năm <Badge color="error">-12,3%</Badge></p>
                  </div>
                </div>
                <ChartContainer width="100%" height={250} className="mt-4">
                  <AreaChart data={statistics} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                    <defs>
                      <linearGradient id="statistics-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary-500)" stopOpacity={0.22} />
                        <stop offset="95%" stopColor="var(--color-primary-500)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={34} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="revenue" name="Doanh thu" stroke="var(--color-primary-500)" strokeWidth={2} fill="url(#statistics-gradient)" />
                    <Area type="monotone" dataKey="target" name="Mục tiêu" stroke="var(--color-primary-300)" strokeWidth={2} fill="transparent" />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border border-base-200 shadow-xs">
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Doanh thu dự kiến</CardTitle>
                  <CardDescription>Mục tiêu tháng hiện tại</CardDescription>
                </div>
                <IconButton label="Tùy chọn"><MenuKebab1 size={18} /></IconButton>
              </CardHeader>
              <CardContent className="space-y-6 pb-5">
                <CircleGauge />
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-title-50">Marketing</span>
                      <span className="text-text-100">85%</span>
                    </div>
                    <Progress progress={85} />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-title-50">Bán hàng</span>
                      <span className="text-text-100">55%</span>
                    </div>
                    <Progress progress={55} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-5 xl:grid-cols-2">
            <Card className="border border-base-200 shadow-xs">
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Danh mục bán hàng</CardTitle>
                  <CardDescription>Phân bổ doanh thu theo kênh</CardDescription>
                </div>
                <IconButton label="Tùy chọn"><MenuKebab1 size={18} /></IconButton>
              </CardHeader>
              <CardContent className="grid gap-5 pb-5 sm:grid-cols-[11rem_1fr] sm:items-center">
                <div className="relative mx-auto flex size-40 items-center justify-center rounded-full border-12 border-primary-100 border-t-primary-500 border-r-primary-300">
                  <div className="text-center">
                    <p className="text-xs text-text-100">Tổng</p>
                    <p className="text-xl font-semibold text-title-50">2.450</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-text-100"><span className="size-2 rounded-full bg-primary-500" />Affiliate</span><strong className="text-title-50">48%</strong></p>
                  <p className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-text-100"><span className="size-2 rounded-full bg-primary-300" />Trực tiếp</span><strong className="text-title-50">33%</strong></p>
                  <p className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 text-text-100"><span className="size-2 rounded-full bg-background-soft-300" />Adsense</span><strong className="text-title-50">19%</strong></p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-base-200 shadow-xs">
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Lịch sắp tới</CardTitle>
                  <CardDescription>Các hoạt động cần theo dõi</CardDescription>
                </div>
                <IconButton label="Tùy chọn"><MenuKebab1 size={18} /></IconButton>
              </CardHeader>
              <CardContent className="divide-y divide-base-200 pb-5">
                {schedule.map((item) => (
                  <div key={item.title} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded border border-base-200"><CheckCircle1 size={13} className="text-text-100" /></span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-medium text-title-50">{item.title}</p>
                        <span className="flex items-center gap-1 text-xs text-text-100"><ClockThree size={13} />{item.time}</span>
                      </div>
                      <p className="mt-1 text-xs text-text-100">{item.date} · Xem chi tiết cuộc họp</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </SidebarProvider>
  );
}
