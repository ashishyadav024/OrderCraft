package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.DashboardMetricsDto;
import com.ordercraft.backend.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping
    public ResponseEntity<DashboardMetricsDto> getDashboard() {
        return ResponseEntity.ok(dashboardService.getDashboardMetrics());
    }

    @GetMapping("/metrics")
    public ResponseEntity<DashboardMetricsDto> getDashboardMetrics() {
        return ResponseEntity.ok(dashboardService.getDashboardMetrics());
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardMetricsDto> getDashboardStats() {
        return ResponseEntity.ok(dashboardService.getDashboardMetrics());
    }

    @GetMapping("/summary")
    public ResponseEntity<DashboardMetricsDto> getDashboardSummary() {
        return ResponseEntity.ok(dashboardService.getDashboardMetrics());
    }
}

