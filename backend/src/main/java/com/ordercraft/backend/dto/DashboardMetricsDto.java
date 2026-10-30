package com.ordercraft.backend.dto;

import com.ordercraft.backend.entity.Material;
import com.ordercraft.backend.entity.SalesOrder;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class DashboardMetricsDto {
    private BigDecimal totalRevenue = BigDecimal.ZERO;
    private int activeOrdersCount = 0;
    private int openOrdersCount = 0;
    private int pendingPoCount = 0;
    private BigDecimal unpaidInvoicesAmount = BigDecimal.ZERO;
    private int unpaidInvoicesCount = 0;
    private int criticalStockMaterialsCount = 0;
    private List<Material> lowStockMaterials = new ArrayList<>();
    private List<SalesOrder> recentOrders = new ArrayList<>();
    private WorkflowStagesDto workflowStages = new WorkflowStagesDto();

    public static class WorkflowStagesDto {
        private int salesOrdersCount = 0;
        private int bomExplodedCount = 0;
        private int purchaseOrdersCount = 0;
        private int goodsReceivedCount = 0;
        private int invoicedCount = 0;
        private int paidCount = 0;

        public int getSalesOrdersCount() { return salesOrdersCount; }
        public void setSalesOrdersCount(int salesOrdersCount) { this.salesOrdersCount = salesOrdersCount; }

        public int getBomExplodedCount() { return bomExplodedCount; }
        public void setBomExplodedCount(int bomExplodedCount) { this.bomExplodedCount = bomExplodedCount; }

        public int getPurchaseOrdersCount() { return purchaseOrdersCount; }
        public void setPurchaseOrdersCount(int purchaseOrdersCount) { this.purchaseOrdersCount = purchaseOrdersCount; }

        public int getGoodsReceivedCount() { return goodsReceivedCount; }
        public void setGoodsReceivedCount(int goodsReceivedCount) { this.goodsReceivedCount = goodsReceivedCount; }

        public int getInvoicedCount() { return invoicedCount; }
        public void setInvoicedCount(int invoicedCount) { this.invoicedCount = invoicedCount; }

        public int getPaidCount() { return paidCount; }
        public void setPaidCount(int paidCount) { this.paidCount = paidCount; }
    }

    public BigDecimal getTotalRevenue() { return totalRevenue; }
    public void setTotalRevenue(BigDecimal totalRevenue) { this.totalRevenue = totalRevenue != null ? totalRevenue : BigDecimal.ZERO; }

    public int getActiveOrdersCount() { return activeOrdersCount; }
    public void setActiveOrdersCount(int activeOrdersCount) {
        this.activeOrdersCount = activeOrdersCount;
        this.openOrdersCount = activeOrdersCount;
    }

    public int getOpenOrdersCount() { return openOrdersCount; }
    public void setOpenOrdersCount(int openOrdersCount) {
        this.openOrdersCount = openOrdersCount;
        this.activeOrdersCount = openOrdersCount;
    }

    public int getPendingPoCount() { return pendingPoCount; }
    public void setPendingPoCount(int pendingPoCount) { this.pendingPoCount = pendingPoCount; }

    public BigDecimal getUnpaidInvoicesAmount() { return unpaidInvoicesAmount; }
    public void setUnpaidInvoicesAmount(BigDecimal unpaidInvoicesAmount) { this.unpaidInvoicesAmount = unpaidInvoicesAmount != null ? unpaidInvoicesAmount : BigDecimal.ZERO; }

    public int getUnpaidInvoicesCount() { return unpaidInvoicesCount; }
    public void setUnpaidInvoicesCount(int unpaidInvoicesCount) { this.unpaidInvoicesCount = unpaidInvoicesCount; }

    public int getCriticalStockMaterialsCount() { return criticalStockMaterialsCount; }
    public void setCriticalStockMaterialsCount(int criticalStockMaterialsCount) { this.criticalStockMaterialsCount = criticalStockMaterialsCount; }

    public List<Material> getLowStockMaterials() { return lowStockMaterials; }
    public void setLowStockMaterials(List<Material> lowStockMaterials) { this.lowStockMaterials = lowStockMaterials != null ? lowStockMaterials : new ArrayList<>(); }

    public List<SalesOrder> getRecentOrders() { return recentOrders; }
    public void setRecentOrders(List<SalesOrder> recentOrders) { this.recentOrders = recentOrders != null ? recentOrders : new ArrayList<>(); }

    public WorkflowStagesDto getWorkflowStages() { return workflowStages; }
    public void setWorkflowStages(WorkflowStagesDto workflowStages) { this.workflowStages = workflowStages != null ? workflowStages : new WorkflowStagesDto(); }
}
