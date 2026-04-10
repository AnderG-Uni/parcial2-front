# 🏗️ Arquitectura Multi-Tenant - UniPark (GKE + PgBouncer + Cloud SQL)

## 📊 Diagrama de Arquitectura

```mermaid
flowchart TB

subgraph GKE["Capa de Aplicación (GKE)"]
    A1[App Pod Tenant A]
    A2[App Pod Tenant B]
    A3[App Pod Tenant N]
end

subgraph SVC["PgBouncer Service (ClusterIP)"]
    LB[Service Load Balancer]
end

subgraph CORE["Capa de Enrutamiento y Pooling"]

    subgraph PB1["PgBouncer Pod 1"]
        P1[PgBouncer]
        PR1[Cloud SQL Proxy]
    end

    subgraph PB2["PgBouncer Pod 2"]
        P2[PgBouncer]
        PR2[Cloud SQL Proxy]
    end

end

subgraph DB["Cloud SQL Fleet"]
    DB1[(Instance 1)]
    DB2[(Instance 2)]
    DBN[(Instance N)]
end

A1 --> LB
A2 --> LB
A3 --> LB

LB --> P1
LB --> P2

P1 --> PR1
P2 --> PR2

PR1 --> DB1
PR1 --> DB2
PR2 --> DB2
PR2 --> DBN
```

---

## 🧩 Descripción

### 🔹 Aplicación
- Microservicios en GKE
- Conexión única a PgBouncer
- Multi-tenant por `dbname`

### 🔹 PgBouncer
- Pooling de conexiones
- Enrutamiento dinámico
- Alta disponibilidad con múltiples réplicas

### 🔹 Cloud SQL Proxy
- Autenticación segura (Workload Identity)
- Túneles TLS

### 🔹 Cloud SQL
- Instancias HA (Primary/Replica)
- Escalabilidad horizontal

---

## 🔐 Seguridad

- Zero Trust
- Sin IPs públicas
- mTLS automático
- IAM dinámico

---

## ⚡ Beneficios

- Escalabilidad transparente
- Alta disponibilidad
- Seguridad enterprise

---

## 🚀 Tecnologías

- GKE
- PgBouncer
- Cloud SQL
- Terraform
- Cloud Build
- Artifact Registry
- Monitoring

---

## 🧠 Nota

Este diagrama usa Mermaid y es compatible con GitHub.
