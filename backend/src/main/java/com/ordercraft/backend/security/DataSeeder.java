package com.ordercraft.backend.security;

import com.ordercraft.backend.entity.*;
import com.ordercraft.backend.repository.*;
import com.ordercraft.backend.service.SalesOrderService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomerRepository customerRepository;
    private final SupplierRepository supplierRepository;
    private final MaterialRepository materialRepository;
    private final ProductRepository productRepository;
    private final BomItemRepository bomItemRepository;
    private final OrderBomRepository orderBomRepository;
    private final SalesOrderRepository salesOrderRepository;
    private final PurchaseOrderRepository purchaseOrderRepository;
    private final InvoiceRepository invoiceRepository;
    private final SalesOrderService salesOrderService;
    private final String adminUsername;
    private final String adminPassword;

    public DataSeeder(AppUserRepository userRepository,
                      PasswordEncoder passwordEncoder,
                      CustomerRepository customerRepository,
                      SupplierRepository supplierRepository,
                      MaterialRepository materialRepository,
                      ProductRepository productRepository,
                      BomItemRepository bomItemRepository,
                      OrderBomRepository orderBomRepository,
                      SalesOrderRepository salesOrderRepository,
                      PurchaseOrderRepository purchaseOrderRepository,
                      InvoiceRepository invoiceRepository,
                      SalesOrderService salesOrderService,
                      @Value("${app.admin.username}") String adminUsername,
                      @Value("${app.admin.password}") String adminPassword) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.customerRepository = customerRepository;
        this.supplierRepository = supplierRepository;
        this.materialRepository = materialRepository;
        this.productRepository = productRepository;
        this.bomItemRepository = bomItemRepository;
        this.orderBomRepository = orderBomRepository;
        this.salesOrderRepository = salesOrderRepository;
        this.purchaseOrderRepository = purchaseOrderRepository;
        this.invoiceRepository = invoiceRepository;
        this.salesOrderService = salesOrderService;
        this.adminUsername = adminUsername;
        this.adminPassword = adminPassword;
    }

    @Override
    public void run(String... args) {
        seedUsers();
        seedMasterData();
        seedOperationalData();
    }

    private void seedUsers() {
        if (userRepository.count() == 0) {
            createUser(adminUsername, adminPassword, Role.ADMIN);
            createUser("sales", "Sales@123", Role.SALES);
            createUser("purchase", "Purchase@123", Role.PURCHASE);
            createUser("accounts", "Accounts@123", Role.ACCOUNTS);
            System.out.println("Default users (admin, sales, purchase, accounts) initialized.");
        }
    }

    private void createUser(String username, String password, Role role) {
        if (userRepository.findByUsername(username).isEmpty()) {
            AppUser user = new AppUser();
            user.setUsername(username);
            user.setPasswordHash(passwordEncoder.encode(password));
            user.setRole(role);
            user.setEnabled(true);
            userRepository.save(user);
        }
    }

    private void seedMasterData() {
        if (customerRepository.count() == 0) {
            Customer c1 = new Customer();
            c1.setName("Tesla Motors India Ltd");
            c1.setEmail("procurement@tesla.co.in");
            c1.setPhone("+91 98201 11223");
            c1.setAddress("Plot 12, Indospace Industrial Park, Chakan, Pune, Maharashtra");
            customerRepository.save(c1);

            Customer c2 = new Customer();
            c2.setName("Tata Advanced Systems");
            c2.setEmail("orders@tataadvanced.com");
            c2.setPhone("+91 97110 33445");
            c2.setAddress("Aerospace SEZ, Adibatla, Hyderabad, Telangana");
            customerRepository.save(c2);

            Customer c3 = new Customer();
            c3.setName("L&T Heavy Engineering");
            c3.setEmail("commercial@larsentoubro.com");
            c3.setPhone("+91 98920 55667");
            c3.setAddress("Powai Campus, Saki Vihar Road, Mumbai, Maharashtra");
            customerRepository.save(c3);
        }

        Supplier s1 = null;
        Supplier s2 = null;
        Supplier s3 = null;

        if (supplierRepository.count() == 0) {
            s1 = new Supplier();
            s1.setName("Hindalco Industries");
            s1.setEmail("sales@hindalco.adityabirla.com");
            s1.setPhone("+91 91234 56780");
            s1.setAddress("Birla Centurion, Worli, Mumbai, Maharashtra");
            s1 = supplierRepository.save(s1);

            s2 = new Supplier();
            s2.setName("Jindal Steel & Power");
            s2.setEmail("commercial@jindalsteel.com");
            s2.setPhone("+91 98765 43210");
            s2.setAddress("Jindal Centre, 12 Bhikaji Cama Place, New Delhi");
            s2 = supplierRepository.save(s2);

            s3 = new Supplier();
            s3.setName("Bosch Rexroth Automation");
            s3.setEmail("supplies@boschrexroth.in");
            s3.setPhone("+91 80 6752 1111");
            s3.setAddress("Plot 96, Electronic City Phase 1, Bengaluru, Karnataka");
            s3 = supplierRepository.save(s3);
        } else {
            List<Supplier> suppliers = supplierRepository.findAll();
            if (!suppliers.isEmpty()) s1 = suppliers.get(0);
            if (suppliers.size() > 1) s2 = suppliers.get(1);
            if (suppliers.size() > 2) s3 = suppliers.get(2);
        }

        Material m1 = null;
        Material m2 = null;
        Material m3 = null;
        Material m4 = null;

        if (materialRepository.count() == 0) {
            m1 = new Material();
            m1.setCode("MAT-ALUM-6061");
            m1.setName("Aircraft Grade Aluminum 6061-T6 (Billet)");
            m1.setUnit("kg");
            m1.setStockQty(BigDecimal.valueOf(120.00));
            m1.setUnitCost(BigDecimal.valueOf(350.00));
            m1.setSupplier(s1);
            m1 = materialRepository.save(m1);

            m2 = new Material();
            m2.setCode("MAT-STEEL-316");
            m2.setName("Stainless Steel 316L Heavy Sheet (2mm)");
            m2.setUnit("m");
            m2.setStockQty(BigDecimal.valueOf(45.00));
            m2.setUnitCost(BigDecimal.valueOf(720.00));
            m2.setSupplier(s2);
            m2 = materialRepository.save(m2);

            m3 = new Material();
            m3.setCode("MAT-BRG-6205");
            m3.setName("Deep Groove Ball Bearing 6205-2RS");
            m3.setUnit("pcs");
            m3.setStockQty(BigDecimal.valueOf(250.00));
            m3.setUnitCost(BigDecimal.valueOf(180.00));
            m3.setSupplier(s3);
            m3 = materialRepository.save(m3);

            m4 = new Material();
            m4.setCode("MAT-VALVE-HYD");
            m4.setName("High-Pressure Directional Control Valve");
            m4.setUnit("pcs");
            m4.setStockQty(BigDecimal.valueOf(15.00));
            m4.setUnitCost(BigDecimal.valueOf(4200.00));
            m4.setSupplier(s3);
            m4 = materialRepository.save(m4);
        } else {
            List<Material> mats = materialRepository.findAll();
            if (!mats.isEmpty()) m1 = mats.get(0);
            if (mats.size() > 1) m2 = mats.get(1);
            if (mats.size() > 2) m3 = mats.get(2);
            if (mats.size() > 3) m4 = mats.get(3);
        }

        if (productRepository.count() == 0 && m1 != null && m2 != null && m3 != null && m4 != null) {
            Product p1 = new Product();
            p1.setSku("PROD-PUMP-HD");
            p1.setName("Industrial Hydraulic Pumping Station 500bar");
            p1.setUnitPrice(BigDecimal.valueOf(185000.00));
            p1 = productRepository.save(p1);

            Product p2 = new Product();
            p2.setSku("PROD-CNC-ROTOR");
            p2.setName("Precision Aerospace Rotor Assembly");
            p2.setUnitPrice(BigDecimal.valueOf(74500.00));
            p2 = productRepository.save(p2);

            // BOM for Pumping Station
            bomItemRepository.save(new BomItem(p1, m1, BigDecimal.valueOf(25.0)));
            bomItemRepository.save(new BomItem(p1, m2, BigDecimal.valueOf(8.0)));
            bomItemRepository.save(new BomItem(p1, m3, BigDecimal.valueOf(4.0)));
            bomItemRepository.save(new BomItem(p1, m4, BigDecimal.valueOf(2.0)));

            // BOM for Rotor Assembly
            bomItemRepository.save(new BomItem(p2, m1, BigDecimal.valueOf(14.0)));
            bomItemRepository.save(new BomItem(p2, m3, BigDecimal.valueOf(2.0)));
        }
    }

    private void seedOperationalData() {
        if (salesOrderRepository.count() == 0) {
            List<Customer> customers = customerRepository.findAll();
            List<Product> products = productRepository.findAll();
            List<Material> materials = materialRepository.findAll();
            List<Supplier> suppliers = supplierRepository.findAll();

            if (customers.isEmpty() || products.isEmpty()) return;

            Customer c1 = customers.get(0);
            Customer c2 = customers.size() > 1 ? customers.get(1) : c1;
            Customer c3 = customers.size() > 2 ? customers.get(2) : c1;

            Product p1 = products.get(0);
            Product p2 = products.size() > 1 ? products.get(1) : p1;

            // Order 1: Confirmed
            SalesOrder so1 = new SalesOrder();
            so1.setOrderNo("SO-2026-1042");
            so1.setCustomer(c1);
            so1.setOrderDate(LocalDate.now().minusDays(5));
            so1.setStatus("CONFIRMED");
            so1.setTotalAmount(p1.getUnitPrice().multiply(BigDecimal.valueOf(2)));

            SalesOrderItem item1 = new SalesOrderItem();
            item1.setSalesOrder(so1);
            item1.setProduct(p1);
            item1.setQuantity(2);
            item1.setUnitPrice(p1.getUnitPrice());
            item1.setLineTotal(so1.getTotalAmount());
            so1.getItems().add(item1);
            so1 = salesOrderRepository.save(so1);

            // Order 2: In Production
            SalesOrder so2 = new SalesOrder();
            so2.setOrderNo("SO-2026-1043");
            so2.setCustomer(c2);
            so2.setOrderDate(LocalDate.now().minusDays(3));
            so2.setStatus("IN_PRODUCTION");
            so2.setTotalAmount(p2.getUnitPrice().multiply(BigDecimal.valueOf(5)));

            SalesOrderItem item2 = new SalesOrderItem();
            item2.setSalesOrder(so2);
            item2.setProduct(p2);
            item2.setQuantity(5);
            item2.setUnitPrice(p2.getUnitPrice());
            item2.setLineTotal(so2.getTotalAmount());
            so2.getItems().add(item2);
            so2 = salesOrderRepository.save(so2);

            // Order 3: Invoiced
            SalesOrder so3 = new SalesOrder();
            so3.setOrderNo("SO-2026-1044");
            so3.setCustomer(c3);
            so3.setOrderDate(LocalDate.now().minusDays(1));
            so3.setStatus("INVOICED");
            so3.setTotalAmount(p1.getUnitPrice());

            SalesOrderItem item3 = new SalesOrderItem();
            item3.setSalesOrder(so3);
            item3.setProduct(p1);
            item3.setQuantity(1);
            item3.setUnitPrice(p1.getUnitPrice());
            item3.setLineTotal(p1.getUnitPrice());
            so3.getItems().add(item3);
            so3 = salesOrderRepository.save(so3);

            // Calculate Order BOM requirements for all seeded orders
            salesOrderService.generateOrderBom(so1.getId());
            salesOrderService.generateOrderBom(so2.getId());
            salesOrderService.generateOrderBom(so3.getId());

            // PO 1
            if (!suppliers.isEmpty() && !materials.isEmpty()) {
                Supplier s1 = suppliers.get(0);
                Material m1 = materials.get(0);

                PurchaseOrder po1 = new PurchaseOrder();
                po1.setPoNo("PO-2026-8021");
                po1.setSupplier(s1);
                po1.setSalesOrder(so1);
                po1.setPoDate(LocalDate.now().minusDays(4));
                po1.setStatus("RECEIVED");
                BigDecimal po1Total = m1.getUnitCost().multiply(BigDecimal.valueOf(50));
                po1.setTotalAmount(po1Total);

                PurchaseOrderItem pItem1 = new PurchaseOrderItem();
                pItem1.setPurchaseOrder(po1);
                pItem1.setMaterial(m1);
                pItem1.setQuantity(BigDecimal.valueOf(50));
                pItem1.setUnitCost(m1.getUnitCost());
                pItem1.setLineTotal(po1Total);
                po1.getItems().add(pItem1);
                purchaseOrderRepository.save(po1);

                // PO 2
                Supplier s2 = suppliers.size() > 1 ? suppliers.get(1) : s1;
                Material m2 = materials.size() > 1 ? materials.get(1) : m1;

                PurchaseOrder po2 = new PurchaseOrder();
                po2.setPoNo("PO-2026-8022");
                po2.setSupplier(s2);
                po2.setSalesOrder(so2);
                po2.setPoDate(LocalDate.now().minusDays(2));
                po2.setStatus("SENT");
                BigDecimal po2Total = m2.getUnitCost().multiply(BigDecimal.valueOf(20));
                po2.setTotalAmount(po2Total);

                PurchaseOrderItem pItem2 = new PurchaseOrderItem();
                pItem2.setPurchaseOrder(po2);
                pItem2.setMaterial(m2);
                pItem2.setQuantity(BigDecimal.valueOf(20));
                pItem2.setUnitCost(m2.getUnitCost());
                pItem2.setLineTotal(po2Total);
                po2.getItems().add(pItem2);
                purchaseOrderRepository.save(po2);
            }

            // Invoice for Order 3
            Invoice inv = new Invoice();
            inv.setInvoiceNo("INV-2026-5001");
            inv.setSalesOrder(so3);
            inv.setInvoiceDate(LocalDate.now().minusDays(1));
            inv.setDueDate(LocalDate.now().plusDays(29));
            inv.setSubtotal(so3.getTotalAmount());
            BigDecimal tax = so3.getTotalAmount().multiply(BigDecimal.valueOf(0.18));
            inv.setTaxAmount(tax);
            inv.setTotalAmount(so3.getTotalAmount().add(tax));
            inv.setStatus("PARTIAL");

            Payment pay = new Payment();
            pay.setInvoice(inv);
            pay.setAmount(BigDecimal.valueOf(100000.00));
            pay.setPaymentDate(LocalDate.now());
            pay.setMethod("BANK_TRANSFER");
            pay.setReferenceNo("UTR-HDFC-991283");
            inv.getPayments().add(pay);
            invoiceRepository.save(inv);
        }

        // Ensure order_bom calculation exists for all orders
        if (orderBomRepository.count() == 0) {
            for (SalesOrder o : salesOrderRepository.findAll()) {
                salesOrderService.generateOrderBom(o.getId());
            }
        }
    }
}
