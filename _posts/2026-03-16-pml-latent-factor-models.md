---
layout: post
title: "Probabilistic ML: Latent Factor Models"
date: 2026-03-16 00:00:00
description: "PML Chapter 28 — Mixture Models, Factor Analysis, ICA 핵심 정리"
tags: [machine-learning, probabilistic-ml, latent-variable, ICA, PCA, factor-analysis]
categories: study_notes
math: true
---

<style>
.post-title {
  font-weight: 700;
}

.post-content h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #222;
  background: none;
  padding: 0.3em 0.7em;
  color: #222;
}

.post-content h3,
.post-content h4,
.post-content p,
.post-content li,
.post-content td,
.post-content th {
  font-size: 0.95rem;
  font-weight: 400;
}

.post-content h3 {
  font-weight: 600;
}

.post-content blockquote {
  border-left: none;
  background: none;
  padding: 0;
  margin: 0.3em 0;
  font-size: 0.95rem;
}

.post-content blockquote p {
  margin-bottom: 0;
}
</style>

## 28.1 Introduction

| 항목 | ICA | PCA | FA |
|------|-----|-----|----|
| 목적 | 독립된 성분 찾기 | 최대한 많은 분산 설명 | 공통 요인 구조 학습 |
| 잠재 변수 z | 통계적으로 독립 | 직교 (orthogonal) | 선형 + 노이즈 포함 |
| 노이즈 | 없음 (또는 매우 작게 가정) | 없음 | 명시적으로 포함 |
| 통계적 가정 | 비가우시안, 독립 | 가우시안, 직교 | 가우시안, 노이즈 있음 |
| 복원 가능성 | 스케일·순서 불변 | 고유값 크기 순 정렬 | label ambiguity 존재 |

**Latent Variable Model (LVM)**: 일부 변수가 항상 잠재적(latent) 또는 숨겨져 있는 확률 모델. 관측 데이터가 어떤 latent factors에 의해 생성된다고 가정.

> 시각적으로 보는 행위(vision)는 실제 세계의 hidden state로부터 관측 가능한 이미지(visible state)가 생성되는 과정을 역추론(infer)하는 작업

**Latent Factor Models**: LVM 중에서도, 데이터가 소수의 연속적인 잠재 요인에 의해 **선형적으로** 설명된다고 가정하는 모델.

$$p(z), \quad p(x \mid z) = \text{Expfam}(x \mid f(z))$$

사전분포 $$p(z)$$와 likelihood $$p(x \mid z)$$를 바꿔서 다양한 classic models를 만들 수 있음.

---

## 28.2 Mixture Models

복잡한 확률 모델을 만드는 방법: take a convex combination of simple distributions.

$$p(x \mid \theta) = \sum_{k=1}^{K} \pi_k p_k(x), \quad 0 \le \pi_k \le 1, \quad \sum_k \pi_k = 1$$

**Hierarchical model로 재표현**

$$z \sim \text{Cat}(\pi), \quad p(z = k) = \pi_k$$

$$x \sim p(x \mid \theta_z)$$

$$p(x, z = k \mid \theta) = \pi_k \cdot p(x \mid \theta_k)$$

z를 marginalize out하면 mixture model이 된다.

### 28.2.1 Gaussian Mixture Models (GMM)

$$p(x) = \sum_{k=1}^{K} \pi_k \cdot \mathcal{N}(x \mid \mu_k, \Sigma_k)$$

- K 값이 커지면 이론적으로 GMM은 $$\mathbb{R}^D$$의 어떤 smooth distribution도 근사할 수 있음
- clustering에서 자주 사용됨

**Responsibility** (데이터 $$x_n$$이 cluster k에서 왔을 확률):

$$r_{nk} \triangleq p(z_n = k \mid x_n, \theta) = \frac{p(z_n = k \mid \theta)\, p(x_n \mid z_n = k, \theta)}{\sum_{k'} p(z_n = k' \mid \theta)\, p(x_n \mid z_n = k', \theta)}$$

**K-means와의 관계**: uniform prior + spherical Gaussians ($$\Sigma_k = I$$) 가정 시 hard clustering 문제로 환원되어 각 데이터포인트를 가장 가까운 centroid에 할당.

### 28.2.2 Bernoulli Mixture Models

Binary 데이터를 모델링할 때 사용 (GMM은 연속 데이터용).

$$p(x \mid z = k, \theta) = \prod_{d=1}^{D} \text{Ber}(y_d \mid \mu_{dk})$$

$$\mu_{dk}$$: k번째 cluster에서 d번째 픽셀이 1일 확률.

### 28.2.6 Unidentifiability

**Label switching 문제**: mixture model의 파라미터가 unidentifiable해짐.

- [1] $$\hat{\mu}_1 = \mu_1^*, \hat{\mu}_2 = \mu_2^*$$와 [2] $$\hat{\mu}_1 = \mu_2^*, \hat{\mu}_2 = \mu_1^*$$는 동일한 결과
- 베이지안 추론에서는 이를 다르게 인식 → 잘못된 클러스터 결과
- 해결: decision theoretic approach (label alignment)

---

## 28.3 Factor Analysis

### 28.3.1 FA: the Basics

**Linear-Gaussian latent variable generative model**:

$$p(z) = \mathcal{N}(z \mid \mu_0, \Sigma_0)$$

$$p(x \mid z, \theta) = \mathcal{N}(x \mid Wz + \mu, \Psi)$$

- $$W$$: factor loading matrix ($$D \times L$$), 저차원 잠재 공간 → 고차원 공간 mapping
- $$\Psi$$: $$D \times D$$ diagonal covariance matrix (각 feature에 대한 독립적인 노이즈)

**FA as Gaussian with low-rank plus diagonal covariance**:

$$p(x \mid \theta) = \mathcal{N}(x \mid \mu,\, WW^\top + \Psi)$$

$$C = \text{Cov}[x] = WW^\top + \Psi, \quad O(LD) \text{ parameters}$$

Full covariance $$O(D^2)$$와 diagonal covariance $$O(D)$$ 사이의 유연한 타협.

**Model Fitting using EM**

- E step: $$x_n$$이 주어졌을 때 어떤 $$z_n$$에서 왔는지 추론, 충분 통계량 $$E_{X,Z}, E_{Z,Z}, E_{X,X}$$ 계산
- M step: E step 통계량으로 $$W, \Psi$$ 업데이트

---

## 28.3 Unidentifiability & Approaches

**Factor rotations problem**: FA 모델에서 $$W$$를 uniquely identify할 수 없음.

$$z \sim \mathcal{N}(0, I)$$이면 임의의 직교 행렬 $$R$$로 z를 회전시켜도 분포가 동일.

해결 방법들:
1. **Forcing W to be lower triangular**: founder variables를 신중하게 선택해야 함
2. **Sparsity promoting priors**: $$\ell_1$$ 정규화, ARD 이용 → "sparse factor analysis"
3. **Choosing an informative rotation matrix**: varimax 등 heuristic 방법
4. **Non-Gaussian priors for latent factors**: z에 비가우시안 prior → $$W$$와 잠재 변수 모두 uniquely identify 가능

---

## 28.6 Independent Components Analysis (ICA)

**Cocktail party problem**: 여러 음성 신호의 선형 결합에서 원래 신호 분리.

$$x = Az, \quad B = A^{-1}$$

- $$x_n \in \mathbb{R}^D$$: 관측된 신호 벡터
- $$z_n \in \mathbb{R}^D$$: 숨겨진 소스 신호
- $$A$$: generative weights

**Noiseless ICA model**:

$$p(x_n) = \prod_{j=1}^{D} p_j(z_j)$$

goal: infer $$p(z_n \mid x_n, A) = \delta(z_n \leftrightarrow Bx_n)$$

### 28.6.2 Non-Gaussian Priors의 필요성

ICA에서 $$W$$를 uniquely identify하려면 **independent non-Gaussian prior** 적용 필요.

보통 **super-Gaussian distribution** (heavy tail) 사용:

- **Laplace prior** (mean 0, variance 1): $$\log p(z) = -\sqrt{2}|z| - \log(\sqrt{2})$$
- **Logistic distribution**: Laplace prior의 미분불가능 문제 해결

> (c) PCA 결과는 unique하게 original source signal을 확인할 수 없고, (d) ICA는 appropriate rotation으로 원본과 가장 유사한 결과를 낸다.

---

## Conclusion

**Latent variable models**: 관측 데이터를 생성하는 메커니즘에 대해 확률적 모델 + 잠재변수 도입.

그 중 하나가 **Latent factor models**: Mixture Model, PCA, ICA, FA 등.
