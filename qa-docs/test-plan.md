# 🧪 Test Plan – Mobile Dashboard (DashPro)

## 1. Objective
To validate the **functionality, usability, performance, and compatibility** of the DashPro dashboard on mobile devices.

## 2. Scope
- **In Scope**: Dashboard page including KPIs, filters, charts, search, notifications, and export.  
- **Out of Scope**: Backend database, third-party integrations, admin-level settings.  

## 3. Testing Approach
- **Manual Testing**: Exploratory, usability, responsive design validation.  
- **Automated Testing**: Appium/Selenium for functional flows; Percy/Applitools for visual regression.  
- **Performance Testing**: Lighthouse for mobile speed, BrowserStack for network simulation.  
- **Cross-Device Testing**: Android (Samsung, Pixel) & iOS (iPhone SE, iPhone 14).  

## 4. Entry & Exit Criteria
- **Entry**: Dashboard deployed on test environment; requirements finalized.  
- **Exit**: All critical defects closed; 90%+ test cases passed.  

## 5. Deliverables
- Requirements.md  
- Test-cases.md  
- Defect Log  
- Test Execution Report  

## 6. Risks
- Export feature not generating reports.  
- Filters not updating results.  
- Offline mode not showing error.  

## 7. Schedule
- Test Design: 2 days  
- Manual Execution: 3 days  
- Automation Scripting: 3 days  
- Reporting: 1 day  
