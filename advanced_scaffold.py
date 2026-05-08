import os

# Department configurations based on user requirements
DEPARTMENTS = {
    "administration": {
        "primary": "#002147", "accent": "#D4AF37", "bgBase": "#FFFFFF",
        "headingFont": "Playfair Display", "bodyFont": "Inter",
        "pages": ["Dashboard", "CompanySettings", "UserManagement", "RolePermissionManager", "ModuleManagement", "SystemConfiguration", "AuditLogViewer", "BranchManagement", "AnnouncementBoard", "ReportsCenter"]
    },
    "sales": {
        "primary": "#065F46", "accent": "#D1FAE5", "bgBase": "#FFFFFF",
        "headingFont": "Montserrat", "bodyFont": "Inter",
        "pages": ["Dashboard", "LeadManagement", "LeadCaptureForm", "SalesPipeline", "CorporateDeals", "QuotationGenerator", "CustomerAcquisitionTracker", "SalesTeamPerformance", "PricingRequests", "LostDealAnalysis"]
    },
    "marketing": {
        "primary": "#EA580C", "accent": "#36454F", "bgBase": "#FDF5E6",
        "headingFont": "Poppins", "bodyFont": "Inter",
        "pages": ["Dashboard", "CampaignManager", "PromoCodeManager", "ContentCalendar", "EmailCampaignBuilder", "SMSCampaignBuilder", "SocialMediaTracker", "SEOManager", "ReferralProgramManager", "BrandAssetManager"]
    },
    "customer-service": {
        "primary": "#FF7F50", "accent": "#FFFDD0", "bgBase": "#F5F5F5",
        "headingFont": "Lato", "bodyFont": "Inter",
        "pages": ["Dashboard", "TicketManager", "TicketView", "NewTicket", "LiveChatMonitor", "ComplaintManager", "FeedbackReview", "KnowledgeBaseManager", "CallbackRequestManager", "CSATAnalytics"]
    },
    "production": {
        "primary": "#4682B4", "accent": "#C0C0C0", "bgBase": "#FFFFFF",
        "headingFont": "Roboto", "bodyFont": "Inter",
        "pages": ["Dashboard", "OrderQueue", "WashingStation", "DryingStation"]
    },
    "operations": {
        "primary": "#008080", "accent": "#D3D3D3", "bgBase": "#FFFFFF",
        "headingFont": "IBM Plex Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "OrderLifecycleManager", "CapacityPlanning", "SLAMonitor", "ExceptionManagement", "InterDepartmentWorkflow", "BranchOperations", "ProcessConfiguration", "ResourceAllocation", "DailyOperationsReport"]
    },
    "transport": {
        "primary": "#FFBF00", "accent": "#5C4033", "bgBase": "#FFFDD0",
        "headingFont": "Nunito", "bodyFont": "Inter",
        "pages": ["Dashboard", "DispatchBoard", "RoutePlanner", "DriverManagement", "VehicleManagement", "DeliveryExecution", "PickupExecution", "ZoneManagement", "FailedDeliveryManagement", "TransportAnalytics"]
    },
    "hr": {
        "primary": "#800080", "accent": "#FFB6C1", "bgBase": "#FFFFFF",
        "headingFont": "Quicksand", "bodyFont": "Inter",
        "pages": ["Dashboard", "EmployeeDirectory", "EmployeeProfile", "Recruitment", "OnboardingChecklist", "AttendanceManagement", "LeaveManagement", "PayrollInput", "EmployeeGrievance"]
    },
    "it": {
        "primary": "#00FF00", "accent": "#000000", "bgBase": "#1A1A1A",
        "headingFont": "JetBrains Mono", "bodyFont": "Source Code Pro",
        "pages": ["Dashboard", "ServerMonitoring", "ApplicationLogs", "ModuleHealth", "APIGateway", "DatabaseMonitor", "SecurityCenter", "BackupManagement", "ReleaseManagement", "ITTicketSystem"]
    },
    "finance": {
        "primary": "#228B22", "accent": "#D4AF37", "bgBase": "#FAF9F6",
        "headingFont": "Merriweather", "bodyFont": "Inter",
        "pages": ["Dashboard", "InvoiceManager", "PaymentReconciliation", "CorporateBilling", "ExpenseManagement", "PayrollProcessing", "CashFlowManager", "AccountsReceivable", "AccountsPayable", "FinancialReports"]
    },
    "business-development": {
        "primary": "#4169E1", "accent": "#FFFF00", "bgBase": "#FFFFFF",
        "headingFont": "Space Grotesk", "bodyFont": "Inter",
        "pages": ["Dashboard", "OpportunityManager", "MarketAnalysis", "PartnershipManager", "NewServiceDevelopment", "BranchExpansion", "FranchiseDevelopment", "CompetitiveIntelligence", "ContractRenewalTracker", "BDActivityLog"]
    },
    "communications": {
        "primary": "#DC143C", "accent": "#FFFFF0", "bgBase": "#FFFFFF",
        "headingFont": "Libre Baskerville", "bodyFont": "Inter",
        "pages": ["Dashboard", "PressReleaseManager", "MediaRelations", "InternalCommunications", "SocialMediaContent", "CrisisCommunication", "BrandVoiceGuide", "EventCommunications", "TranslationManager", "CommunicationsAnalytics"]
    },
    "security": {
        "primary": "#556B2F", "accent": "#2F4F4F", "bgBase": "#FFFFFF",
        "headingFont": "Oswald", "bodyFont": "Roboto Mono",
        "pages": ["Dashboard", "CameraManagement", "AlertFeed", "AccessControlLog", "IncidentManager", "GuardPatrolManagement", "VisitorManagement", "KeyAssetManagement", "SecurityReport", "EmergencyProtocols"]
    },
    "housekeeping": {
        "primary": "#87CEEB", "accent": "#FFFFFF", "bgBase": "#F0F8FF",
        "headingFont": "Nunito Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "AreaManager", "CleaningSchedule", "TaskChecklist", "DeepCleaningPlanner", "SupplyInventory"]
    },
    "quality-control": {
        "primary": "#4B0082", "accent": "#FFBF00", "bgBase": "#FFFFFF",
        "headingFont": "DM Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "InspectionQueue", "InspectionChecklist", "DefectCatalog", "ReworkManagement", "QualityStandards", "CustomerQualityComplaints", "QCStaffPerformance", "QualityReports", "SupplierQuality"]
    },
    "warehouse": {
        "primary": "#708090", "accent": "#008080", "bgBase": "#D3D3D3",
        "headingFont": "Manrope", "bodyFont": "Inter",
        "pages": ["Dashboard", "StockOverview", "InboundManagement", "OutboundManagement", "StockAdjustment", "ReorderManagement", "BinLocationManagement", "CycleCount", "SupplierManagement", "InventoryReports"]
    },
    "maintenance": {
        "primary": "#000080", "accent": "#FFBF00", "bgBase": "#FFFFFF",
        "headingFont": "Work Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "PreventiveMaintenance", "SpareParts", "WorkOrders", "BreakdownAlerts"]
    },
    "procurement": {
        "primary": "#000080", "accent": "#FFBF00", "bgBase": "#FFFFFF",
        "headingFont": "IBM Plex Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "VendorManagement", "PurchaseOrders", "RFQ", "SupplierScorecards", "Negotiations"]
    },
    "projects": {
        "primary": "#008080", "accent": "#FFFFFF", "bgBase": "#FFFFFF",
        "headingFont": "Inter", "bodyFont": "Inter",
        "pages": ["Dashboard", "GanttChart", "BudgetTracking", "Milestones", "MachineryInstallation"]
    },
    "loyalty": {
        "primary": "#FF00FF", "accent": "#FFD700", "bgBase": "#FFFFFF",
        "headingFont": "Comfortaa", "bodyFont": "Inter",
        "pages": ["Dashboard", "MemberManagement", "PointsConfiguration", "TierManagement", "RewardCatalog", "ReferralProgram", "PointsAdjustment", "MemberCommunication", "LoyaltyAnalytics", "FraudDetection"]
    },
    "claims": {
        "primary": "#FF0000", "accent": "#808080", "bgBase": "#FFC0CB",
        "headingFont": "Work Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "ClaimManager", "NewClaim", "Investigation", "CompensationCalculator", "ApprovalWorkflow", "CustomerCommunication", "InsuranceCoordination", "ClaimAnalytics", "PolicyConfiguration"]
    },
    "feedback": {
        "primary": "#FF007F", "accent": "#FFBF00", "bgBase": "#FFFFFF",
        "headingFont": "Plus Jakarta Sans", "bodyFont": "Inter",
        "pages": ["Dashboard", "FeedbackInbox", "ComplaintManager", "SatisfactionSurveys", "ResponseTemplates", "EscalationMatrix", "FeedbackAnalytics", "ActionItems", "MonthlyFeedbackReport", "FeedbackIntegration"]
    },
    "hse": {
        "primary": "#008000", "accent": "#FFFF00", "bgBase": "#FFFFFF",
        "headingFont": "Karla", "bodyFont": "Inter",
        "pages": ["Dashboard", "IncidentReporting", "IncidentInvestigation", "PPEInventory", "SafetyInspections", "ChemicalSafety", "BoilerSafety", "FireSafety", "WastewaterMonitoring"]
    }
}

base_path = "apps/frontend/src/portals/departments"

# 1. Update Layouts and Routes
for dept, config in DEPARTMENTS.items():
    dept_path = os.path.join(base_path, dept)
    os.makedirs(os.path.join(dept_path, "views"), exist_ok=True)
    
    # Create Layout.vue
    with open(os.path.join(dept_path, "Layout.vue"), "w") as f:
        f.write(f"""<template>
  <div class="flex h-screen bg-bg-base font-body">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary text-white flex flex-col shrink-0">
      <div class="p-6 text-xl font-bold font-heading border-b border-white/10 truncate">
        {dept.replace('-', ' ').title()}
      </div>
      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <router-link 
          v-for="page in navPages" 
          :key="page.name"
          :to="page.path" 
          class="block p-2 rounded hover:bg-white/10 transition-colors text-sm"
          active-class="bg-white/20 border-l-4 border-accent pl-1"
        >
          {{{{ page.title }}}}
        </router-link>
      </nav>
      <div class="p-4 border-t border-white/10 text-xs opacity-50">
        AL RAYES DIGITAL v0.1.0
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto flex flex-col">
      <header class="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
        <div class="flex items-center space-x-4">
          <span class="text-sm font-medium text-text-main/60 capitalize">Portals / {dept.replace('-', ' ')}</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
            {dept[0].upper()}
          </div>
        </div>
      </header>
      
      <div class="flex-1">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const navPages = [
""")
        for page in config["pages"]:
            path = f"/{dept}" if page == "Dashboard" else f"/{dept}/{page.lower()}"
            title = page.replace('Manager', ' Manager').replace('Viewer', ' Viewer').replace('Configuration', ' Configuration').replace('Management', ' Management').replace('Board', ' Board').replace('Center', ' Center')
            f.write(f"  {{ name: '{dept}-{page.lower()}', path: '{path}', title: '{title}' }},\n")
        
        f.write("""];
</script>
""")

    # Create routes.ts
    with open(os.path.join(dept_path, "routes.ts"), "w") as f:
        f.write(f"import {{ RouteRecordRaw }} from 'vue-router';\n\n")
        f.write(f"const routes: RouteRecordRaw[] = [\n")
        f.write(f"  {{\n")
        f.write(f"    path: '/{dept}',\n")
        f.write(f"    component: () => import('./Layout.vue'),\n")
        f.write(f"    children: [\n")
        
        for page in config["pages"]:
            path = "" if page == "Dashboard" else page.lower()
            name = f"{dept}-dashboard" if page == "Dashboard" else f"{dept}-{page.lower()}"
            title = f"{dept.replace('-', ' ').title()} {page}" if page == "Dashboard" else page.replace('Manager', ' Manager')
            f.write(f"      {{\n")
            f.write(f"        path: '{path}',\n")
            f.write(f"        name: '{name}',\n")
            f.write(f"        component: () => import('./views/{page}.vue'),\n")
            f.write(f"        meta: {{ title: '{title}', permission: '{dept}:read' }}\n")
            f.write(f"      }},\n")
            
        f.write(f"    ]\n")
        f.write(f"  }}\n")
        f.write(f"];\n\nexport default routes;\n")

    # Create views
    for page in config["pages"]:
        with open(os.path.join(dept_path, "views", f"{page}.vue"), "w") as f:
            title = page.replace('Manager', ' Manager').replace('Viewer', ' Viewer').replace('Configuration', ' Configuration').replace('Management', ' Management').replace('Board', ' Board').replace('Center', ' Center')
            f.write(f"""<template>
  <div class="p-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold text-primary font-heading">{title}</h1>
        <p class="text-text-main/70 mt-2">Manage {dept.replace('-', ' ')} {title.lower()} and operations.</p>
      </div>
      <div class="flex space-x-3">
        <button class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Export</button>
        <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90">Refresh</button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div v-for="i in 3" :key="i" class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div class="text-sm font-medium text-text-main/50 mb-1">Metric Sample {{{{ i }}}}]</div>
        <div class="text-2xl font-bold text-primary">0.00</div>
        <div class="text-xs text-success mt-1">↑ 0% from last month</div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200 flex items-center justify-between">
        <h2 class="font-bold text-lg text-primary">Recent Activity</h2>
        <div class="text-sm text-accent cursor-pointer hover:underline">View All</div>
      </div>
      <div class="p-12 text-center text-text-main/40 italic">
        No data available for {title} yet.
      </div>
    </div>
  </div>
</template>
""")

# 2. Update departmentThemes.ts
with open("apps/frontend/src/store/departmentThemes.ts", "w") as f:
    f.write("import { ThemeConfig } from '../store/theme';\n\n")
    f.write("export const DEPARTMENT_THEMES: Record<string, Partial<ThemeConfig>> = {\n")
    for dept, config in DEPARTMENTS.items():
        f.write(f"  '{dept}': {{\n")
        f.write(f"    primary: '{config['primary']}',\n")
        f.write(f"    accent: '{config['accent']}',\n")
        f.write(f"    bgBase: '{config['bgBase']}',\n")
        f.write(f"    headingFont: '{config['headingFont']}',\n")
        f.write(f"    bodyFont: '{config['bodyFont']}',\n")
        f.write(f"  }},\n")
    f.write("};\n")

print(f"Scaffolded {len(DEPARTMENTS)} department portals with their respective pages and themes.")
